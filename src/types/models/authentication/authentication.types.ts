import User from '../user/User.types';
import { Secrets } from './secrets.types';

export interface Authentication {
  profile: User | null;
  secrets: Secrets;
}
