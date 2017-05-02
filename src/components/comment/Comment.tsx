import * as React from "react";
import { IComment } from "../../dto/Comment";
require("!style-loader!css-loader!sass-loader!./Comment.scss");
export interface CommentProps {
    comment?:IComment
}
export default class Comment extends React.Component<CommentProps, undefined> {
    constructor() {
        super();
    }
    render() {
        return <div className="comment ui segment secondary">
            
                <strong className="comment-user-label">{this.props.comment.user.nombre}</strong> &nbsp;
                <span>{this.props.comment.message}</span>
            
        </div>;
    }
}
