import { Dispatch } from 'redux';
import { signInWithUsernameAndPassword } from '../../../../../store/authentication/authenticationActions/authenticationActions';
import { ValidTypeFromYupSchema } from '../../../../../utils/form/helpers';
import getSignInFormSchema from './SignInForm.schema';

export type SignInFormSchema = ValidTypeFromYupSchema<typeof getSignInFormSchema>;

export interface SignInWithUsernameAndPasswordMutationVariables {
  username: string;
  password: string;
  dispatch: Dispatch;
}

export type SignInWithUsernameAndPasswordMutation = (
  variables: SignInWithUsernameAndPasswordMutationVariables
) => ReturnType<ReturnType<typeof signInWithUsernameAndPassword>>;
