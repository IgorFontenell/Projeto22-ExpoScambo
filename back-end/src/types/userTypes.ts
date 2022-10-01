export interface IUserRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    photo: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export type TypeUserInfo = Omit<IUserRegister, 'confirmPassword'> | null
