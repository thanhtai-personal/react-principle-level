export interface IUser {
  id: number | string;
  name: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
