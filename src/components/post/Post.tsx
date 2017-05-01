import * as React from "react";
import Comment from "../comment/Comment";
import CommentBox from "../comment-box/CommentBox";
require("!style-loader!css-loader!sass-loader!./Post.scss");
export interface PostProps {
    message?:String
}
export class Post extends React.Component<PostProps, undefined> {
    public static defaultProps: Partial<PostProps> = {
        message: ""
    };
    constructor() {
        super();
    }
    render() {
        return <div className="post">
            <div className="ui post-message segment top attached">
                <p>{this.props.message}</p>
                <div className="ui grid four column">
                    <div className="row post-links">
                        <a className="column">
                            Reaccionar
                        </a>
                        <a className="column">
                            Comentar
                        </a>
                    </div>
                    
                </div>
                    
            </div>
            <div className="ui segment attached ">
                <a className="ui blue circular label">2</a>
                <a className="ui red circular label">2</a>
                <a className="ui yellow circular label">2</a>
                <a className="ui green circular basic label">2</a>
            </div>
            <div className="ui segment bottom attached">
                <div className="ui attached segments">
                    <Comment message="Comentario 1"/>                
                    <Comment message="Comentario 2"/>                
                    <Comment message="Comentario 3"/>                
                    <Comment message="Comentario 4"/>
                </div>
                <CommentBox/>
            </div>            
        </div>;
    }
}
