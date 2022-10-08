import { Dispatch } from "redux"
import * as _ from 'lodash';
import { State } from "../../../types/api/core/state.types"
import { AuthSuccessResponseData } from "../../../types/api/endpoints/endpoints.types"
import { Secrets } from "../../../types/models/authentication/secrets.types"
import { Device } from "../../../types/models/device/device.types"
import User from "../../../types/models/user/User.types"
import AUTHENTICATION_ENDPOINTS from "../../../utils/api/endpoints/authenticationEndpoints"
import { SetApiStateAction, SetAuthenticationInfosAction, SetDeviceAction, SetProfileAction, SetSecretsAction, SET_API_STATE, SET_AUTHENTICATION_INFOS, SET_DEVICE, SET_PROFILE, SET_SECRETS, SIGN_OUT } from "./authenticationActions.types"
import { QueryClient } from "react-query";
import { getCookie, transformHeadersToSecrets } from "../../../utils/authentication/headersToSecrets";
import { HEADERS } from "apisauce";
import generateDevice from "../../../utils/authentication/generateDevice/generateDevice";
import api from "../../../utils/api/api";

export const setProfile = (profile: User) => (dispatch: Dispatch) => {
  dispatch<SetProfileAction>({
    type: SET_PROFILE,
    profile
  })
}

export const setSecrets = (secrets: Secrets | null) => async (dispatch: Dispatch) => {
    dispatch<SetSecretsAction>({
        type: SET_SECRETS,
        secrets
    });
};

export const setDevice = (device: Device) => async (dispatch: Dispatch) => {
    dispatch<SetDeviceAction>({
        type: SET_DEVICE,
        device
    });
};

export const setApiState = (apiState: State) => async (dispatch: Dispatch) => {
    dispatch<SetApiStateAction>({
        type: SET_API_STATE,
        apiState
    });
};

export const signOut = (queryClient: QueryClient) => async (dispatch: Dispatch) => {
    queryClient.removeQueries();
    Object.keys(api.headers).forEach(key => api.deleteHeader(key))
    dispatch<any>({
        type: SIGN_OUT
    });
};

export const signInWithUsernameAndPassword = 
  (username: string, password: string) => async (dispatch: Dispatch) => {
    console.log(username, password)
    const device = generateDevice(username)
    const response = await AUTHENTICATION_ENDPOINTS.signInWithUsernameAndPassword({ username, password, device })

    const { problem, data: json, headers } = response

    if (problem) {
      throw json
    }

    console.log("headers", headers)

    const secrets = transformHeadersToSecrets(headers as HEADERS);
    const profile = (json as AuthSuccessResponseData).logged_in_user;
    dispatch<SetAuthenticationInfosAction>({
        type: SET_AUTHENTICATION_INFOS,
        profile,
        secrets,
        device
    });
    
    return json?.logged_in_user
  }