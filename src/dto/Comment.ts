import { IUser } from "./User";

export interface IComment {
    key:number
    message:string
    date:Date
    user:IUser
}