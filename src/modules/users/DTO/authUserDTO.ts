export interface authUserDTO {
  email: string;
  password: string;
}

export interface TokenPayload {
  id: string;
  iat: number;
}
