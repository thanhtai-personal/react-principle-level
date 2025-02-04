import { IUser } from './IUser';

export interface ILoginData
  extends Pick<IUser, 'email' | 'username' | 'password'> {
  lastLogin?: Date;
  isBlocked?: boolean;
  retries?: number;
  token?: string;
  refreshToken?: string;
}
