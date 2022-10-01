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

export interface IUserDB {
    id: Number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    photo: string;
}
