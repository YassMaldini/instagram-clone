import { useQuery } from "react-query";
import User from "../../../types/models/user/User.types";
import { queryCurrentUser } from "./useCurrentUser.actions";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { profileSelector, secretsSelector } from "../../../store/authentication/authenticationReducerSelectors";
import { setProfile } from "../../../store/authentication/authenticationActions/authenticationActions";
import { useDispatch } from "react-redux";

export const USE_CURRENT_USER_QUERY_KEY = 'USE_CURRENT_USER';

const useCurrentUser = () => {
  const dispatch = useDispatch();

  const inStoreCurrentUser = useSelector(profileSelector);
  const inStoreSecrets = useSelector(secretsSelector);

  const useQueryResult = useQuery<User | null, Error>(USE_CURRENT_USER_QUERY_KEY, () => queryCurrentUser(), {
      initialData: inStoreCurrentUser,
      onSuccess: (data) => {
          setProfile(data as User)(dispatch);
      },
      enabled: Boolean(inStoreSecrets),
      staleTime: 1000 // prevent re-fetch when multiple currentUser queries are made during this time window (in ms)
  });

  const { data, ...useQueryResultRest } = useQueryResult;
  const currentUser = data as Exclude<typeof data, undefined>;

  return currentUser
}

export default useCurrentUser