import * as React from 'react';
import { Component, ReactElement } from 'react';
import { Link, Route, Switch, NavLink, BrowserRouter} from 'react-router-dom';
import Parent from '../../components/parent/Parent';
import Comment from '../../components/comment/Comment';

type myProps = Readonly<{
    match: any;
}>; 

class AppPage extends Component<myProps,any> {
    componentDidMount = () => {
        console.log(this.props);
    }
    render(): ReactElement<any> {
        return <div>Hello</div>
    }
}

export default AppPage;