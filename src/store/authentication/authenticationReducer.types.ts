import { State } from "../../types/api/core/state.types";
import { Secrets } from "../../types/models/authentication/secrets.types";
import { Device } from "../../types/models/device/device.types";
import User from "../../types/models/user/User.types";

interface AuthenticationReducerState {
  profile: User | null
  secrets: Secrets | null
  device: Device | null
  apiState: State | null
}

export default AuthenticationReducerState;