export interface getUserDTO {
  id: string;
}

export interface createUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface deleteUserDTO {
  id: string;
}

export interface updateUserDTO {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}
