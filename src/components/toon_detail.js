import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchToon } from '../actions';
import { deleteToon } from '../actions';

class ToonDetail extends Component {
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchToon(id);
    }

    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deleteToon(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {toon} = this.props;

        //if data has not yet been fetched correctly, return Loading div
        if (!toon) {
            return <div>Loading...</div>;
        }
        return(
            <div>
                <Link to="/">Back</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Toon
                </button>
                <h3>{toon.name}</h3>
                <h6>{toon.spec} {toon.class}</h6>
                <p>Artifact Progression</p>
                <img src={`//static.icy-veins.com/images/wow/${(toon.spec).toLowerCase()}-${(toon.class).toLowerCase()}-artifact.jpg`} alt="Artifact Progression"/>
                <p>Artifact Progression above 35</p>
                <img src={`//static.icy-veins.com/images/wow/${(toon.spec).toLowerCase()}-${(toon.class).toLowerCase()}-artifact-above-35.jpg`} alt="Artifact Progression Above Level 35"/>
            </div>
        );

    }
}

// ownProps used by convention, to indicate this components props
// Example used to demonstrate that mapStateToProps can be used for more than
// just working with global state object.

function mapStateToProps({ toons }, ownProps){
    return { toon: toons[ownProps.match.params.id] };
}

export default connect (mapStateToProps, { fetchToon, deleteToon })(ToonDetail);
