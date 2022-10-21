import { useQuery } from 'react-query';
import User from '../../../types/models/user/User.types';
import { queryCurrentUser } from './useCurrentUser.actions';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../../store/authentication/authenticationReducerSelectors';
import { setProfile } from '../../../store/authentication/authenticationActions/authenticationActions';
import { useDispatch } from 'react-redux';
import api from '../../../utils/api/api';
import { Secrets } from '../../../types/models/authentication/secrets.types';
import { useCallback } from 'react';

export const USE_CURRENT_USER_QUERY_KEY = 'USE_CURRENT_USER';

const useCurrentUser = (secrets: Secrets | null) =>
  useCallback(() => {
    const dispatch = useDispatch();

    const inStoreCurrentUser = useSelector(profileSelector);

    const useQueryResult = useQuery<User | null, Error>(
      USE_CURRENT_USER_QUERY_KEY,
      () => queryCurrentUser(),
      {
        initialData: inStoreCurrentUser,
        onSuccess: (data) => {
          setProfile(data as User)(dispatch);
        },
        enabled: Boolean(secrets) && Boolean(api.headers['x-mid']),
        staleTime: 10000, // prevent re-fetch when multiple currentUser queries are made during this time window (in ms)
      }
    );

    const { data } = useQueryResult;
    const currentUser = data as Exclude<typeof data, undefined>;

    console.log('currentUser', currentUser);

    return currentUser;
  }, [secrets]);

export default useCurrentUser;
