import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import 'semantic-ui-css/semantic.min.css';
import './index.scss';

import Register from './components/Auth/register';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Register} />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
