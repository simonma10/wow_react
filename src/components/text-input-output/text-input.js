import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props){
        super(props);
        this.state = {inputValue: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e){
        this.setState({inputValue: e.target.value});
    }


    handleSubmit(e) {
        console.log(this.state.inputValue);
        e.preventDefault();
        this.props.handleInputSubmit(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    render() {
        const placeholder = this.props.placeholderText;
        const textPrompt = this.props.textPrompt;

        return (
            <form onSubmit={this.handleSubmit}>
                <span>{textPrompt}</span>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default TextInput;