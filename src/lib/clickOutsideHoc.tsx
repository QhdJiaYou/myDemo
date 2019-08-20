import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function clickOutsideHOC(WrappedComp: any) {
    return class extends React.Component {
      map = new Map();
  
      realDOM: any = null; // 承载真实 dom
  
      dom: any = null; // 承载 ref
  
      componentDidMount() {
        window.document.addEventListener('click', this.registerClickCature, true);
        window.document.addEventListener('click', this.registerClickBubble, false);
        this.realDOM.addEventListener('click', this.handleClickSelf, false);
      }
  
      componentWillUnmount() {
        window.document.removeEventListener('click', this.registerClickCature, true);
        window.document.removeEventListener('click', this.registerClickBubble, false);
        this.realDOM.removeEventListener('click', this.handleClickSelf, false);
      }
  
      registerClickCature = (e: any) => {
        this.map.set(e, false);
      };
  
      registerClickBubble = (e: any) => {
        const isClickInside = this.map.get(e);
        this.map.delete(e);
        if (!isClickInside) {
           // console.log(true);
           this.dom.hanleClickOutSide();
        }
      };
  
      handleClickSelf = (e: any) => {
        this.map.set(e, true);
      };
  
      processRef = (dom: any) => {
        this.realDOM = ReactDOM.findDOMNode(dom);
        // console.log(dom);
        this.dom = dom;
        console.log(this.realDOM);
      };
  
      render() {
        return <WrappedComp ref={this.processRef}></WrappedComp>;
      }
    } as typeof WrappedComp;
  }