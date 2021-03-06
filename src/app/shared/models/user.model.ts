import { BaseModel, ModelMeta } from './base.model';

export type UserAuthenticationStatus = 'unauthenticated' | 'authenticated' | 'pending' | 'none';
export type UserRegistrationStatus = 'registered' | 'unregistered' | 'pending'

export interface User extends BaseModel {
  id: number | null;
  email: string | null;
  // password?: string | null;
  username?: string;
  authenticationStatus?: UserAuthenticationStatus;
  rooms?: string[];
}
