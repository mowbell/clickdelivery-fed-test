import * as React from "react";
import { Form, Button, TextArea } from 'semantic-ui-react'
require("!style-loader!css-loader!sass-loader!./PostBox.scss");
export interface PostBoxProps {
    onAddedPost:Function,
    text?:string
}
export interface PostBoxState {
    status:string
}
export class PostBox extends React.Component<PostBoxProps, PostBoxState> {
    componentWillMount() {
        this.setState({status:this.props.text});
    }
    componentWillReceiveProps(nextProps: PostBoxProps){
        this.setState({status:nextProps.text});
    }
    onClick(){
        console.log(this.state)
        this.props.onAddedPost(this.state.status)
    }
    handleChange = (e, {value}) => this.setState({ status:value })    
    
    render() {
        return <div className="post-box">
            <div className="ui segment clearing">
                <Form>
                    <TextArea ref="elTextArea" value={this.state.status} onChange={this.handleChange.bind(this)} placeholder='Escriba aquí su estado' autoHeight />
                </Form>
                <div className="ui divider"></div>
                <Button
                    floated="right"
                    color='green'
                    content='Publicar'
                    icon='send'
                    onClick={this.onClick.bind(this)}
                    />
            </div>
        </div>;
    }
}
