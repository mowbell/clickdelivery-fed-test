import * as React from "react";
import { Menu } from 'semantic-ui-react'
import { PostBox } from './post-box/PostBox'
import { Post } from './post/Post'
import { IPost } from "../dto/Post";
import * as statuses from '../statuses';

require("!style-loader!css-loader!sass-loader!./App.scss");

export interface AppProps {
    statuses?:Array<IPost>
}
export interface AppState {
    statuses:Array<IPost>,
    currentStatus:string
}

export default class App extends React.Component<AppProps, AppState> {
    public static defaultProps: Partial<AppProps> = {
        statuses: statuses.statuses
    };
    componentWillMount() {
        this.setState({statuses:this.props.statuses, currentStatus:''});
    }
    
    onAddedStatus(status:string){
        console.log(status)
        let post:IPost={
            key:Math.random(),
            message:status,
            user:{
                nombre:'Mauricio', 
                apellido:'Bello'
            },
            comments:[],
            date:new Date()
        };
        let {statuses}=this.state;
        statuses.splice(0,0,post);
        const currentStatus=''
        this.setState({statuses, currentStatus})


    };
    render() {
        var postItems = [];
        var statuses=this.state.statuses
        statuses.map(function(post:IPost){
            postItems.push(<Post key={post.key} post={post} />);
        })
        return <div className="app">
            <Menu className="app-menu" fixed="top">
                <Menu.Item header>Domicilios Test</Menu.Item>
            </Menu>
            <div id="main-container" className="ui container">
                <div className="ui centered grid">
                    <div className="twelve wide column">
                        <PostBox text={this.state.currentStatus} onAddedPost={this.onAddedStatus.bind(this)}/>
                        {postItems}
                    </div>
                </div>
            </div>
        </div>;
    }
}