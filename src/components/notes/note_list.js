import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; //nearly identical to <a> tag
import _ from 'lodash';

import { fetchNotes } from '../../actions/actions_notes';
import { Field, reduxForm } from 'redux-form';

class NoteList extends Component {
    /*constructor(props) {
        super(props);
        this.state = props.concat({notes: [{id: 0, text:'a test note'}], text: ''});
    }*/
    componentDidMount(){
        console.log('componentDidMount');
        this.props.fetchNotes();
    }

    onSubmit(values){
        console.log(values);
        this.props.createNote(values, () => {
            this.props.history.push('/notes'); //programmatic navigation back to root page
        });

        /*const newNotes = this.state.notes.concat(values);
        this.setState({notes: newNotes});*/
    }

    renderNotes() {
        return _.map(this.props.notes, note => {
            return (
                <li className="list-group-item" key={note.id}>
                    <Link to={`/notes/${note.id}`}>
                        {note.details}
                    </Link>
                </li>
            );
        });
    }

    render(){

        return(
            <div>
                <div className="row">
                    <div className="col-md-8 h3">Notes</div>

                </div>
                <form onSubmit={() => (this.onSubmit.bind(this))}>

                    <input type="text"/>
                    <button type="submit" className="btn btn-primary">Add</button>

                </form>

                <ul className="list-group">
                    {this.renderNotes()}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { notes: state.notes };
};

export default connect(mapStateToProps, { fetchNotes })(NoteList);

/*
<div className="col-md-4 text-xs-right">
    <Link className="btn btn-primary" to="/notes/new">Add a Note</Link>
</div>

 <Field
 label="Note" // add arbitrary properties to pass through to render function
 name="details"
 component={this.renderField} //add fn with JSX to show field on screen
 />

    */