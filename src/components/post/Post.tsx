import * as React from "react";
import * as ReactDOM from "react-dom";
import Comment from "../comment/Comment";
import CommentBox from "../comment-box/CommentBox";
import { IPost } from "../../dto/Post";
import { IComment } from "../../dto/Comment";
import { Icon, Popup, Button } from 'semantic-ui-react'
require("!style-loader!css-loader!sass-loader!./Post.scss");
export interface PostProps {
    post:IPost,
    index:number
}
export interface PostState {
    comments:IComment[]
    key:number,
    displayComments:boolean
}
export class Post extends React.Component<PostProps, PostState> {
    componentWillMount() {
        this.setState({
            key:this.props.post.key,
            comments:this.props.post.comments,
            displayComments:this.props.index===0
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
    onCommentBtnClick(e){
        e.preventDefault()
        
        this.setState({displayComments:true});

        const node = ReactDOM.findDOMNode(this.refs.elCommentBox);
        if (node) {
           node.scrollIntoView();
        }
    }
    render() {
        const comments=this.getComments()
        const commentsCount=comments.length;
        return <div className="post">
            <div className="ui post-message segment top attached">
                <div className="ui grid">
                    <div className="two wide column">
                        <Icon name="user" disabled circular size="large" color="grey" />
                    </div>
                    <div className="fourteen wide column">
                        <h4 className="post-user-label">{this.props.post.user.nombre} {this.props.post.user.apellido}</h4>
                        <p>{this.props.post.message}</p>
                        <div className="ui grid four column">
                            <div className="row post-links">
                                
                                <Popup
                                    trigger={<a className="column">Reaccionar</a>}
                                    content={<div>
                                        <Button circular color="blue" icon='thumbs up' />
                                        <Button circular color="red" icon='heart' />
                                        <Button circular color="yellow" icon='thumbs down' />
                                    </div>}
                                    on='click'
                                    position='top center'
                                />
                                <a className="column" href="#" onClick={this.onCommentBtnClick.bind(this)}>
                                    Comentar
                                </a>
                            </div>
                            
                        </div>
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
            { this.state.displayComments ?
            <div className="ui segment bottom attached">
                <div className="ui attached segments">
                    {comments}
                </div>
                <CommentBox ref="elCommentBox" onAdded={this.onCommentAdded.bind(this)}/>
            </div>
            :null
            }
        </div>;
    }
}
