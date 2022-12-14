import AuthenticationReducerState from './authenticationReducer.types';

const AUTHENTICATION_REDUCER_INITIAL_STATE = Object.freeze<AuthenticationReducerState>({
  profile: null,
  secrets: null,
  device: null,
  apiState: null,
});

export default AUTHENTICATION_REDUCER_INITIAL_STATE;
