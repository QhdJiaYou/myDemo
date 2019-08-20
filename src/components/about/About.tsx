import * as React from 'react';
import { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class About extends Component<any, any> {
    render() {
        const { match } =this.props;
        return(
            <div>
                <ul>
                    <li><Link to={`${match.url}/link1`}>link1</Link></li>
                    <li><Link to={`${match.url}/link2`}>link2</Link></li>
                </ul>
                <Route path='/about/link1' component={Show}/>
                <Route path='/about/link2' component={No}/>
            </div>
        )
    }
}
function Show() {
    return (
        <div>Yes</div>
    );
}
function No() {
    return (
        <div>No</div>
    );
}

export default About;