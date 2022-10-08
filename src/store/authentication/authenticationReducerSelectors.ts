import RootState from "../store.types";

export const profileSelector = ({ authentication: reducer }: RootState) => reducer.profile;

export const secretsSelector = ({ authentication: reducer }: RootState) => reducer.secrets;

export const deviceSelector = ({ authentication: reducer }: RootState) => reducer.device;

export const apiStateSelector = ({ authentication: reducer }: RootState) => reducer.apiState;