import api, { authenticationApi } from '../api';
import {
  SignInErrorResponseData,
  SignInRequestData,
  SignInSuccessResponseData,
} from '../../../types/api/endpoints/authentication/signIn.types';
import { StaticPostEndpoints } from '../../../types/api/endpoints/staticEndpoints';
import generateDevice from '../../authentication/generateDevice/generateDevice';

const AUTHENTICATION_ENDPOINTS = Object.freeze({
  QeSync: () =>
    authenticationApi.post<SignInSuccessResponseData, SignInErrorResponseData>(
      StaticPostEndpoints.QeSync
    ),
  signInWithUsernameAndPassword: (data: SignInRequestData) => {
    console.log('data', data);
    return authenticationApi.post<SignInSuccessResponseData, SignInErrorResponseData>(
      StaticPostEndpoints.SignIn,
      data
    );
  },
});

export default AUTHENTICATION_ENDPOINTS;
