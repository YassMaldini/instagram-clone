import { Dispatch } from "redux";
import { string } from "yup";
import { signInWithUsernameAndPassword } from "../../../../../store/authentication/authenticationActions/authenticationActions";
import { Device } from "../../../../../types/models/device/device.types";
import { ValidTypeFromYupSchema } from "../../../../../utils/form/helpers";
import getSignInFormSchema from "./SignInForm.schema";

export type SignInFormSchema = ValidTypeFromYupSchema<typeof getSignInFormSchema>

export interface SignInWithUsernameAndPasswordMutationVariables {
  username: string
  password: string
  dispatch: Dispatch
}

export type SignInWithUsernameAndPasswordMutation = (
  variables: SignInWithUsernameAndPasswordMutationVariables
) => ReturnType<ReturnType<typeof signInWithUsernameAndPassword>>