
export interface IPostDB {
    id: number;
    userId: number;
    description: string;
    categoryId: number;
    budget: number;
    travelAddress: string;
    arrivalDay: string;
    departureDay: string;
}



export type TypeCreatePost = Omit<IPostDB, "id" & "userId">