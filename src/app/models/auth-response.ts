import { UserResponse } from "./user-response";

export type AuthResponse = {
  token: string;
  user: UserResponse;
};