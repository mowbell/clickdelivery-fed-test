import * as React from "react";
require("!style-loader!css-loader!sass-loader!./Comment.scss");
export interface CommentProps {
    message?:String
}
export default class Comment extends React.Component<CommentProps, undefined> {
    public static defaultProps: Partial<CommentProps> = {
        message: "Comment"
    };
    constructor() {
        super();
    }
    render() {
        return <div className="comment ui segment secondary">
            <p>{this.props.message}</p>    
            
        </div>;
    }
}
