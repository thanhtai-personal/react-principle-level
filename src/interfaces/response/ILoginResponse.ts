import { ILoginData } from '../ILoginData';
import { IUser } from '../IUser';

export interface ILoginResponse {
  loginData: ILoginData;
  profile: IUser;
}
