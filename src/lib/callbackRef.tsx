import * as React from 'react';
import * as ReactDOM from 'react-dom';

class CustomTextInput extends React.Component<any, any> {
    textInput: any = null;
    componentDidMount() {
      // 在挂载时自动聚焦
      this.focusTextInput();
    }
    setTextInputRef = (element: any) => {
        this.textInput = element;
        console.log(ReactDOM.findDOMNode(element));
    };
    focusTextInput = () => {
      // 通过原生DOM API聚焦文本
      if (this.textInput) this.textInput.focus();
    };
    render() {
      // 使用'ref'回调去在一个实例域中储存文本输入DOM元素的引用(比如, this.textInput).
      return (
        <div>
          <input
            type="text"
            ref={this.setTextInputRef}
          />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }
  export default CustomTextInput;