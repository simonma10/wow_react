import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TextOutput extends Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate() {
        this.scrollToEnd();
    }

    renderOutput(textOutputItem, index){
        return(
          <p key={index}>
              {textOutputItem}
          </p>
        );
    }

    render() {
        const textOutput = this.props.textOutput;
        //this.scrollToEnd();
        return (
          <div
              className="textOutputContainer"
              id="textOutputContainer"
              ref={(div) => {
                  this.textOutputContainer = div;
              }}
          >
              {textOutput.map(this.renderOutput)}
          </div>
        );
    }

    scrollToEnd(){
        const scrollHeight = this.textOutputContainer.scrollHeight;
        const height = this.textOutputContainer.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.textOutputContainer.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
}

export default TextOutput;