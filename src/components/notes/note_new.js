import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'

import { createNote } from '../../actions/index';

class NoteNew extends Component {
    renderField(field){
        const { meta: {touched, error}} = field; //ES6 destructuring of field.meta.touched, field.meta.error etc
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input} // dont have to wire up all the potential handlers, onChange, onBlur etc
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>

            </div>
        );
    }

    onSubmit(values){
        this.props.createNote(values, () => {
            this.props.history.push('/'); //programmatic navigation back to root page
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Note" // add arbitrary properties to pass through to render function
                    name="details"
                    component={this.renderField} //add fn with JSX to show field on screen
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }

}

function validate(values){

    const errors = {};
    if (!values.details){
        errors.name = "Enter details!";
    }

    return errors; // if we return empty object, form is fine to submit
}


export default reduxForm({
    validate,   //called on submit
    form: 'NotesNewForm'    //name of new form
})(
    connect(null,{ createNote })(NoteNew)  //embed action creator binding within form binding!!
);
