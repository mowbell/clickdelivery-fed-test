import { IUser } from "./User";

export interface IComment {
    message:string
    date:Date
    user:IUser
}