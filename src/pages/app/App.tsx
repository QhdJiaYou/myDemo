import * as React from 'react';
import { Link, Route, Switch, NavLink, BrowserRouter} from 'react-router-dom';
import Parent from '../../components/parent/Parent';
import Comment from '../../components/comment/Comment';

type myProps = Readonly<{
    match: any;
}>; 
interface myState {
    name: string,
}

class AppPage extends React.Component<myProps, myState> {
    public myRef: React.RefObject<HTMLDivElement>;
    public state = {
        name: 'ahd',
    }
    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount = () => {
        console.log(this.myRef.current.style);
    }
    render() {
        return <div style={{color: 'red'}} ref={this.myRef}>{this.state.name}</div>
    }
}

export default AppPage;