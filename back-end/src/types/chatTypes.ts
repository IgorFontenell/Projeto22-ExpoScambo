
export interface IChatDB {
    id: number;
    courierId: number
    buyerId: number
}

export interface ISendMessage {
    chatId: number
    writerId: number
    destinyId: number
    message: string
    timeOfMessage: string
}

// export interface ICategoryDB {
//     id: number;
//     name: string;
// }



//export type TypeCreatePost = Omit<IPostDB, "id" & "userId">