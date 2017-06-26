/**
 * Created by Simon Martin on 6/20/2017.
 */

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; //nearly identical to <a> tag
import { fetchToons } from '../actions';

class ToonList extends Component {
    componentDidMount(){
        this.props.fetchToons();
    }

    renderToons(){
        return _.map(this.props.toons, toon => {
            return (
               <li className="list-group-item" key={toon.id}>
                    <Link to={`/toons/${toon.id}`}>
                        {toon.name}
                    </Link>
                </li>
            );
        });
    }


    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-8 h3">Toons</div>
                    <div className="col-md-4 text-xs-right">
                        <Link className="btn btn-primary" to="/toons/new">Add a toon</Link>
                    </div>
                </div>
                <ul className="list-group">
                    {this.renderToons()}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state){
    return { toons: state.toons }
}

export default connect(mapStateToProps, { fetchToons })(ToonList);
