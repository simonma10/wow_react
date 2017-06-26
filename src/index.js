import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers/index';

import Header from "./components/header";
import ToonList from './components/toon_list';
import ToonDetail from './components/toon_detail';
import ToonNew from './components/toon_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>

          <div>
              <Header/>
              <Switch>
                  <Route path="/toons/new" component={ ToonNew } />
                  <Route path="/toons/:id" component={ ToonDetail } />
                  <Route path="/" component={ ToonList } />
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
