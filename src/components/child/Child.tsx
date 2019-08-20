import * as React from 'react';
import { Component, PureComponent } from 'react';
import HighComponent from '../hoc/Hoc'

type myProps = Readonly<{
    value: string;
}>;
type myState = {
    info: string;
}
class ChildPage extends Component<myProps, myState> {
    constructor(props: myProps) {
        super(props);
        this.state = {
            info: 'i am child',
        }
        console.log('I am child constructor');
    }

    render(): React.ReactElement<any> {
        const { info } = this.state;
        console.log(this.props);
        // const { value } = this.props;
        console.log('I am child render');
        return <div>{info}{this.props.value}</div>
    }
}

export default HighComponent(ChildPage);