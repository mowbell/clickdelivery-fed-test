import * as React from "react";
import { Form, TextArea, Button } from 'semantic-ui-react'
require("!style-loader!css-loader!sass-loader!./PostBox.scss");
export interface PostBoxProps {
}
export class PostBox extends React.Component<PostBoxProps, undefined> {
    render() {
        return <div className="post-box">
            <div className="ui segment clearing">
                <Form>
                    <TextArea placeholder='Escriba aquí su estado' autoHeight />
                </Form>
                <div className="ui divider"></div>
                <Button
                    floated="right"
                    color='green'
                    content='Publicar'
                    icon='send'
                    />
            </div>
        </div>;
    }
}
