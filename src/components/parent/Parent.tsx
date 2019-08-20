import * as React from 'react';
import { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import Child from '../../components/child/Child';

/* type myProps = Readonly<{
    id: number;
    selectedOrgId: number;
    setOrgID: any;
}>; */

type myState = {
    name: string;
}
function Item(props: any) {
    return <li>{props.message}</li>
}
class Parent extends Component<any, myState> {
    state = {
        name: 'Hello World',
    }

    componentDidMount = () => {
        console.log(this.props.match);
    }

    render(): ReactElement<any> {
        const { name } = this.state;
        const { selectedOrgId, setOrgID } = this.props;
        const todos =['one', 'two', 'three'];
        return (
            <div>
                <div>
                    {name}ID是{selectedOrgId}
                </div>
                <ul>
                    {todos.map((message) => <Item key={message} message={message} />)}
                </ul>
                <button onClick={() => {setOrgID(selectedOrgId)}}>
                    click me
                </button>
                <Child condition={true} value={'123'}></Child>
            </div>
        )
    }
}

function mapStateToProps({ list }: any): any {
    return {
        ...list,
    };
}
function mapDispatchToProps(dispatch: any): any {
    return {
        setOrgID: (payload: any) => dispatch({ type: 'list/setOrg', payload }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Parent);