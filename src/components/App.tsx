import * as React from "react";
import { Menu } from 'semantic-ui-react'
import { PostBox } from './post-box/PostBox'
import { Post } from './post/Post'

require("!style-loader!css-loader!sass-loader!./App.scss");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return <div className="app">
            <Menu className="app-menu" fixed="top">
                <Menu.Item header>Domicilios Test</Menu.Item>
            </Menu>
            <div id="main-container" className="ui container">
                <div className="ui centered grid">
                    <div className="twelve wide column">
                        <PostBox/>
                        <Post message="No joda"/>
                        <Post message="Hala"/>
                    </div>
                </div>
            </div>
        </div>;
    }
}
