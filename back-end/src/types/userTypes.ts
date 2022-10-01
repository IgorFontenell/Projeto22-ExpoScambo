export interface IUserRegister {
    email: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    address: string;
    photo: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export type TypeUserInfo = Omit<IUserRegister, 'confirmPassword'>
