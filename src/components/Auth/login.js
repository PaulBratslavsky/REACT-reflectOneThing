import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        errors: [],
        loading: false,
    }

    handleChange = event => this.setState({ [event.target.name]: event.target.value}); 

    displayErrors = (errors) => errors.map( (error, i) => <p key={i}>{error.message}</p>);

    handleInputError = (errors, inputName) => {
        return errors.some(error => error.message.toLowerCase().includes(inputName))
          ? "error"
          : "";
      };

    
    handleSubmit = event => {
        event.preventDefault();

        if ( this.isFormValid(this.state) ) {
            this.setState({ loading: true, errors: [] });
            firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( signedInUser => {
                console.log(signedInUser);
            })
            .catch( (error) => {
                console.log(error);
                this.setState({
                    errors: this.state.errors.concat(error),
                    loading: false
                });
            }); 
        }
        
    }

    isFormValid = ({ email, password }) => email && password;
    
    render() {

        const { email, password, errors, loading } = this.state;
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' color='violet' textAlign='center'>
                    <Icon name="code branch" /> Login to 1R
                </Header>
                <Form onSubmit={this.handleSubmit} size='large'>
                    <Segment stacked>
                    <Form.Input
                        fluid
                        name='email'
                        icon='mail'
                        iconPosition='left'
                        placeholder='Email'
                        type='email'
                        onChange={this.handleChange}
                        value={email}
                        className={this.handleInputError(errors, 'email')}
                    />
                    <Form.Input
                        fluid
                        name='password'
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={this.handleChange}
                        value={password}
                        className={this.handleInputError(errors, 'password')}

                    />


                    <Button disabled={loading} className={ loading ? 'loading' : ''} color='violet' fluid size='large'>
                        Login
                    </Button>
                    </Segment>
                </Form>
                {
                    this.state.errors.length > 0 && 
                    <Message error>
                        <h3>Error</h3>
                        {this.displayErrors(errors)}
                    </Message>
                }
                <Message>
                    Don't have account? <Link to="/register">Register</Link>
                </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;