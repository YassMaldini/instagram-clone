import { useMemo } from "react";
import { useSelector } from "react-redux";
import { secretsSelector } from "../../../store/authentication/authenticationReducerSelectors";
import useCurrentUser from "../useCurrentUser/useCurrentUser";

const useIsSignedIn = () => {
  const secrets = useSelector(secretsSelector);
  const currentUser = useCurrentUser();

  return useMemo(() => Boolean(secrets && currentUser), [secrets, currentUser]);
}

export default useIsSignedIn