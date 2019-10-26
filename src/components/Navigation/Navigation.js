import React from 'react';
import { Menu, Label, Icon, Image } from 'semantic-ui-react';
import firebase from './../../firebase';

class Navigation extends React.Component {

    state = {
        user: null
    }

    componentDidMount() {
        this.setState({ user: this.props.currentUser })
    }

    handleSignoutUser = () => {
        firebase
        .auth()
        .signOut()
        .then( () => {console.log('signed out!')});
    }

    render() {
        
        const { activeItem } = this.props;
        
        return (
        <div>
            <Menu attached='top' secondary>
            <Menu.Item
                name='journals'
                active={activeItem === 'journals'}
                onClick={this.props.handleItemClick}
            />
            <Menu.Item
                name='forum'
                active={activeItem === 'forum'}
                onClick={this.props.handleItemClick}
            />

            <Menu.Menu position='right'>
                <Menu.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image src={this.state.user  && this.state.user.photoURL} avatar />
                        <Label>
                            {this.state.user  && this.state.user.displayName}
                        </Label> 
                        <Icon onClick={this.handleSignoutUser} name='delete' size='large' />   
                    </div>
                    </Menu.Item>
            </Menu.Menu>
            </Menu>
        </div>
        )
    }
}

export default Navigation;

