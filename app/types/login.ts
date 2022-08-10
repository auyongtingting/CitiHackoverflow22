export interface loginSuccessResponse {
  success: boolean;
  accessToken: string;
}

export interface loginUserInput {
  username: string;
  password: string;
}
