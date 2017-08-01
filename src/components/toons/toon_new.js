import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; //reduxForm very similar to 'connect' helper
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createToon } from '../../actions/index';

class ToonNew extends Component {
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
        this.props.createToon(values, () => {
            this.props.history.push('/'); //programmatic navigation back to root page
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Name" // add arbitrary properties to pass through to render function
                    name="name"
                    component={this.renderField} //add fn with JSX to show field on screen
                />
                <Field
                    label="Class"
                    name="class"
                    component={this.renderField}
                />
                <Field
                    label="Spec"
                    name="spec"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){

    const errors = {};
    if (!values.name){
        errors.name = "Enter a name!";
    }
    if (!values.class){
        errors.class = "Enter a class";
    }
    if (!values.spec){
        errors.spec = "Enter a spec";
    }
    return errors; // if we return empty object, form is fine to submit
}


export default reduxForm({
    validate,   //called on submit
    form: 'ToonsNewForm'    //name of new form
})(
    connect(null,{ createToon })(ToonNew)  //embed action creator binding within form binding!!
);