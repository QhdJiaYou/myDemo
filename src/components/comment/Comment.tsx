import * as React from 'react';
import { Component }  from 'react';
type myProps = Readonly<{
    color: string;
    text: string;
}>;
class Comment extends React.Component {
    render() {
        const prop = this.props;
        console.log(prop);
        return <ToolBar color='red' text='click me'/>
    }
}

function ToolBar(props: myProps) {
    return (
        <div>
            <ColorButton color={props.color} text={props.text}></ColorButton>
        </div>
    )
}

class ColorButton extends React.Component<myProps, any> {
    render() {
        const color = this.props.color;
        return <button style={{ColorButton: color}}>{this.props.text}</button>
    }
}

export default Comment;