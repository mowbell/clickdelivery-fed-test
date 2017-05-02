import * as React from "react";
import Comment from "../comment/Comment";
import CommentBox from "../comment-box/CommentBox";
import { IPost } from "../../dto/Post";
import { IComment } from "../../dto/Comment";
require("!style-loader!css-loader!sass-loader!./Post.scss");
export interface PostProps {
    post:IPost
}
export interface PostState {
    comments:IComment[]
    key:number
}
export class Post extends React.Component<PostProps, PostState> {
    componentWillMount() {
        this.setState({
            key:this.props.post.key,
            comments:this.props.post.comments
        });
    }
    onCommentAdded(message){
        console.log(message)
        let newComment:IComment={
            key:Math.random(),
            message:message,
            date:new Date(),
            user:{
                nombre:'Mauricio',
                apellido:'Bello'
            }
        }
        let {comments}=this.state;
        comments.push(newComment)
        this.setState({comments});
    }
    getComments(){
        let comments= [];
        this.state.comments.map(function(comment:IComment){
            comments.push(<Comment key={comment.key} comment={comment} />);
        })
        
        return comments;
    }
    render() {
        const comments=this.getComments()
        const commentsCount=comments.length;
        return <div className="post">
            <div className="ui post-message segment top attached">
                <p>{this.props.post.message}</p>
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
                <div className="ui equal width grid">
                    <div className="column">
                        <a className="ui blue circular label">2</a>
                        <a className="ui red circular label">2</a>
                        <a className="ui yellow circular label">2</a>
                        <a className="ui green circular basic label">2</a>
                    </div>
                    <div className="column right aligned">
                        <span>{commentsCount} comentarios</span>
                    </div>
                </div>
                
            </div>
            <div className="ui segment bottom attached">
                <div className="ui attached segments">
                    {comments}
                </div>
                <CommentBox onAdded={this.onCommentAdded.bind(this)}/>
            </div>            
        </div>;
    }
}
