import * as React from 'react';
import * as ReactDOM from 'react-dom';
import clickOutsideHOC from './clickOutsideHoc';

@clickOutsideHOC
export default class ClickButton extends React.PureComponent {
    /* map = new Map();

    componentDidMount() {
        window.document.addEventListener('click', this.registerClickCapture, true);
        window.document.addEventListener('click', this.registerClickBubble, false);
    }

    componentWillUnmount() {
        window.document.removeEventListener('click', this.registerClickCapture, true);
        window.document.removeEventListener('click', this.registerClickBubble, false);
    }

    registerClickCapture = (e: any) => {
        this.map.set(e, false);
    }

    registerClickBubble = (e: any) => {
        const isClickInside = this.map.get(e);
        this.map.delete(e);
        if (!isClickInside) {
            this.hanleClickOutSide();
        }
    }

    handleClickSelf = (e: React.MouseEvent) => {
        const ev = e.nativeEvent;
        this.map.set(ev, true);
    } */

    hanleClickOutSide = () => {
        console.log('点击了外部');
    };

    render() {
        return (
            <div>
            <div style={{ height: 40, width: 40, backgroundColor: 'blue' }}></div>
            <div>nihaoya</div>
            </div>  
        )
    }
}
