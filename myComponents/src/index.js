import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './pages/App/index';
import Radio from './pages/Radio';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/radio" component={Radio}/>
      </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
