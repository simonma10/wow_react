import React, { Component } from 'react';

import TextOutput from './text-output';
import TextInput from './text-input';

class TextIOContainer extends Component {
    constructor(props){
        super(props);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
        this.state = {
            textOutput: ['here is some output text'],
            textInput: '',
            textPrompt: '> ',
            placeholderText: 'Please type something'
        };
    }

    handleInputSubmit(textInput){
        let newState = this.state.textOutput;
        newState.push(textInput);
        this.setState({textOutput: newState})
    }

    render() {
        const textOutput = this.state.textOutput;
        const textInput = this.state.textInput;
        const textPrompt = this.state.textPrompt;
        const placeholderText = this.state.placeholderText;

        return (
          <div>
              <TextOutput textOutput={textOutput}/>
              <TextInput
                  placeholderText={placeholderText}
                  textPrompt={textPrompt}
                  textInput={textInput}
                  handleInputSubmit={this.handleInputSubmit}
              />
          </div>
        );
    }
}

export default TextIOContainer;




/*





 */