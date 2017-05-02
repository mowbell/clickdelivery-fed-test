import * as React from "react";
import { Form, Input } from 'semantic-ui-react'
//require("!style-loader!css-loader!sass-loader!./PostBox.scss");
export interface CommentBoxProps {
    onAdded:Function,
    text?:string
}
export interface CommentBoxState {
    message:string,
    key:number
}

export default class CommentBox extends React.Component<CommentBoxProps, CommentBoxState> {
    componentWillMount = () => this.setState({message:this.props.text});
    handleChange = (e, {value}) => {
        e.preventDefault()
        this.setState({ message:value })
        console.log(this.state)
    }
    onSubmit(e){
        e.preventDefault()
        this.props.onAdded(this.state.message);
        this.setState({message:''});
    }
    render() {
        return <div className="comment-box">
            <form onSubmit={this.onSubmit.bind(this)}>
                <Input value={this.state.message} 
                onChange={this.handleChange.bind(this)} fluid placeholder='Escriba un comentario' />
            </form>
        </div>;
    }
}
