import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';


import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';


import 'semantic-ui-css/semantic.min.css';
import './index.scss';

import Register from './components/Auth/register';
import Login from './components/Auth/login';
import Spinner from './components/Spinner';

// REDUX
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { setUser, clearUser } from './actions';
import App from './App';

const store = createStore( rootReducer, composeWithDevTools() );

class Root extends React.Component {
    
    componentDidMount() {

        console.log(this.props.isLoading, 'from props');

        firebase.auth().onAuthStateChanged( user => {
            if (user) {
                this.props.setUser(user);
                this.props.history.push('/');

                console.log(user);
            } else {
                this.props.history.push('/login')
                this.props.clearUser();
                console.log(user);

            }
        })

        
    }

    render() {

        return this.props.isLoading ? <Spinner /> : (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.user.isLoading
    }
};
    
const RouterWithAuth = withRouter(connect(mapStateToProps, { setUser, clearUser })(Root));

ReactDOM.render(<Provider store={store}><Router><RouterWithAuth /></Router></Provider>, document.getElementById('root'));
