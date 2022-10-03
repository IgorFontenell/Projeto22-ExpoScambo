
export interface IPostDB {
    id: number;
    userId: number;
    description: string;
    categoryName: string;
    budget: number;
    travelAddress: string;
    arrivalDay: string;
    departureDay: string;
}

export interface ICategoryDB {
    id: number;
    name: string;
}



export type TypeCreatePost = Omit<IPostDB, "id" & "userId">