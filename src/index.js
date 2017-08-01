import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';
import counter from './reducers/reducer_counter';
import Counter from './components/counter';

import Header from "./components/header";
import ToonList from './components/toons/toon_list';
import ToonDetail from './components/toons/toon_detail';
import ToonNew from './components/toons/toon_new';
import NoteList from './components/notes/note_list';
import NoteNew from './components/notes/note_new';
import TerminalComponent from './components/terminal';
import TextIOContainer from './components/text-input-output/text-io-container';
import Home from './components/home'



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// create store with reference to devTools extension
const store = createStoreWithMiddleware(
  rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>

                <Switch>
                    <Route path="/toons/new" component={ ToonNew } />
                    <Route path="/toons/:id" component={ ToonDetail } />
                    <Route path="/toons" component={ ToonList } />
                    <Route path="/notes" component={ NoteList } />
                    <Route path="/notes/new" component={ NoteNew } />
                    <Route path="/terminal" component={ TerminalComponent } />
                    <Route path="/textio" component={ TextIOContainer } />

                    <Route path="/" component={ Home } />
                 </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));






