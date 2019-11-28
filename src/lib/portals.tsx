import * as React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('test');

class Modal extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
       return createPortal(this.props.children, modalRoot);
    }
}

class Parent extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(event: any) {
        // 当子元素里的按钮被点击时，
        // 这个将会被触发更新父元素的 state，
        // 即使这个按钮在 DOM 中不是直接关联的后代
        this.setState((state: any) => ({
          clicks: state.clicks + 1
        }));
        console.log(event.currentTarget);
      }
    
      render() {
        return (
          <div onClick={this.handleClick}>
            <p>Number of clicks: {this.state.clicks}</p>
            <p>
              Open up the browser DevTools
              to observe that the button
              is not a child of the div
              with the onClick handler.
            </p>
            <Modal>
              <Child />
            </Modal>
          </div>
        );
      }
}

function Child() {
    return (
        <div>
            <button>Click</button>
        </div>
    );
}

export default Parent;