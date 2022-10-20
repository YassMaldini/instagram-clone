import {
  AccountRepositoryCurrentUserResponseUser,
  AccountRepositoryLoginResponseLogged_in_user,
  AccountRepositoryLoginResponseRootObject,
  IgResponse,
} from 'instagram-private-api';

type User =
  | IgResponse<AccountRepositoryLoginResponseRootObject>
  | AccountRepositoryLoginResponseLogged_in_user
  | AccountRepositoryCurrentUserResponseUser;

export default User;
