import { IAuthData } from '@/interfaces/IAuthData';
import { ILoginData } from '@/interfaces/ILoginData';
import { IRoleData } from '@/interfaces/IRoleData';
import { IUser } from '@/interfaces/IUser';
import { makeObservable } from 'mobx'; // import { makeObservable, action } from "mobx"

// Fast Boilerplate (Directly set data with public scope)
export class AuthStore implements IAuthData {
  public profile: IUser | undefined;
  public loginData: ILoginData | undefined;
  public roleData: IRoleData | undefined;

  constructor() {
    makeObservable(this);
  }
}

//// Standard boilerplate (Set data via action)
// export class AuthStore implements IAuthData {
//   profile: IUser | undefined;
//   loginData: ILoginData | undefined;
//   roleData: IRoleData | undefined;

//   @action updateProfile() {}
//   @action updateLoginData() {}
//   @action updateRoleData() {}

//   constructor() {
//     makeObservable(this)
//   }
// }
