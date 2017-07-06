import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './pages/App/index';
import Radio from './pages/Radio';
import Timer from './pages/Timer';
import Input from './pages/Input';
import registerServiceWorker from './registerServiceWorker';
import './index.less';

ReactDOM.render((
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/radio" component={Radio}/>
        <Route path="/timer" component={Timer}/>
        <Route path="/input" component={Input}/>
      </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
