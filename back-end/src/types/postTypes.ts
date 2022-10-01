
export interface IPostDB {
    id: number;
    userId: number;
    description: string;
    categorie: number;
    budget: number;
    travelAdress: string;
    cpf: string;
    photo: string;
}



export type TypeCreatePost = Omit<IPostDB, "id" & "userId">