import { ILoginData } from './ILoginData';
import { IRoleData } from './IRoleData';
import { IUser } from './IUser';

export interface IAuthData {
  profile?: IUser;
  loginData?: ILoginData;
  roleData?: IRoleData;
}
