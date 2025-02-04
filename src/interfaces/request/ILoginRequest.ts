import { ILoginData } from '../ILoginData';

export interface ILoginRequest
  extends Pick<
    ILoginData,
    'username' | 'email' | 'password' | 'retries' | 'lastLogin'
  > {}
