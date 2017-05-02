import { IUser } from "./User";
import { IComment } from "./Comment";

export interface IPost {
    key:number
    message:string
    comments:Array<IComment>
    date:Date
    user:IUser
}