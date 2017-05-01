import * as React from "react";
import { Form, Input } from 'semantic-ui-react'
//require("!style-loader!css-loader!sass-loader!./PostBox.scss");
export interface CommentBoxProps {
}
export default class CommentBox extends React.Component<CommentBoxProps, undefined> {
    render() {
        return <div className="comment-box">
            <Form>
                <Input fluid placeholder='Escriba un comentario' />
            </Form>
        </div>;
    }
}
