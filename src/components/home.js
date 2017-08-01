import React, { Component } from 'react';
import { connect } from 'react-redux';
import TerminalComponent from './terminal';

class Home extends Component {

    render(){
        return(
            <div>
                <p>Welcome to the site...</p>

                <p>Here are some useful links:</p>
                <ul>
                    <li><a href="https://www.wowhead.com">Wowhead</a></li>
                    <li><a href="https://www.icy-veins.com/wow/">Icy Veins</a></li>
                </ul>
                <hr/>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps)(Home);
