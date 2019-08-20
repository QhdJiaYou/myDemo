import * as React from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import AppPage from './pages/app/App';
import Parent from './components/parent/Parent';
import Comment from './components/comment/Comment';
import Topics from './components/topic/Topic';
import About from './components/about/About';
import ClickTest from '../src/lib/clickCom';
import LifeCycle from '../src/lib/lifecycle';
import CustomTextInput from '../src/lib/callbackRef';
import './index.scss';

const NoMatch = (): JSX.Element => (
    <div>
        Page Not Found!
    </div>
)

/* const reg = /^#\//g
const hash = window.location.hash;
const view: string = hash.replace(reg, ''); */

const Router = (): JSX.Element => (
    <HashRouter>
        <div className="nav">
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/parent">Parent</Link>
                </li>
                <li>
                <Link to="/comment">Comment</Link>
                </li>
                <li>
                <Link to="/topics">Topics</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
        <div className="content">
            <Switch>
                <Route exact path="/" component={AppPage} />
                <Route path="/parent" component={Parent} />
                <Route path="/comment" component={Comment} />
                <Route path="/topics" component={Topics} />
                <Route path="/about" component={LifeCycle} />
            </Switch>
        </div>
    </HashRouter>
);

export default Router;