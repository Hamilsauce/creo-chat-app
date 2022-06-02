import { HttpHeaders, HttpStatusCode } from "@angular/common/http";

export type UserRegistrationHttpStatusText = 'Created' | 'User Not Created'

export interface PostUserHttpResponse {
  location: string;
  headers: HttpHeaders;
  status: HttpStatusCode;
  statusText: UserRegistrationHttpStatusText;
  body: AuthenticationResponse
}

export interface AuthenticationResponse {
  id?: number;
  username?: string;
  email?: string;
  authenticationMessage: string;
}
