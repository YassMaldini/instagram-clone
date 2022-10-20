import { signInWithUsernameAndPassword } from '../../../../../store/authentication/authenticationActions/authenticationActions';
import { SignInWithUsernameAndPasswordMutation } from './SignInForm.types';

const signInWithUsernameAndPasswordMutation: SignInWithUsernameAndPasswordMutation = ({
  username,
  password,
  dispatch,
}) => signInWithUsernameAndPassword(username, password)(dispatch);

export default signInWithUsernameAndPasswordMutation;
