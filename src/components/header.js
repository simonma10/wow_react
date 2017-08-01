import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render(props) {
        return(
          <div>
              <div className="row">
                  <div className="col-md-8 h3">React-Redux Sandpit</div>
                  <div className="col-md-4 text-xs-right">
                      <Link className="btn" to="/textio">Text IO</Link>
                      <Link className="btn" to="/terminal">Terminal</Link>
                      <Link className="btn" to="/toons">Toons</Link>
                      <Link className="btn" to="/notes">Notes</Link>
                  </div>
              </div>

              <hr/>
          </div>
        );
    }
}


/*

 <small className="text-xs-right">(Subheading)</small>

 */


