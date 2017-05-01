import { IUser } from "./User";
import { IComment } from "./Comment";

export interface IPost {
    comments:Array<IComment>
    date:Date
    user:IUser
}