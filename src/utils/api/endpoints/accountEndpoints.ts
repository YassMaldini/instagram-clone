import { CurrentUserSuccessResponseData } from "../../../types/api/endpoints/accounts/currentuser.types";
import { ErrorResponseData } from "../../../types/api/endpoints/endpoints.types";
import { StaticGetEndpoints } from "../../../types/api/endpoints/staticEndpoints";
import api from "../api";

const ACCOUNT_ENDPOINTS = Object.freeze({
  currentUser: () => 
    api.get<CurrentUserSuccessResponseData, ErrorResponseData>(StaticGetEndpoints.CurrentUser)
})

export default ACCOUNT_ENDPOINTS