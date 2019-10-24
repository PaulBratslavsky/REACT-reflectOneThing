import React from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';

const data = [
  
];

 const Nav = () => (
  <nav>
    <h1>one</h1>
    <FaRegPlusSquare />
  </nav>
 )

 const Card = (props) => (
  <div className="card">
    <h2>DAY: {props.day}</h2>
    <p>Let's Reflect</p>
    <ul>
      <li>message: I feel like... </li>
      <li>message: I had to... </li>
      <li>message: I don't... </li>
    </ul>
    <button>Add Daily note</button>
  </div>
 )


class App extends React.Component {

  state = {
    card: null,
    day: 0
  }

  componentDidMount() {
    this.setState({
      card: data
    });
  }

  takeStepForward = () => {
    console.log('Take a step forward clicked');
    this.setState( (prevState) => {
        return {
        card: [ ...prevState.card, { id: 2222, day: this.state.day + 1 } ],
        day: prevState.day + 1
      }
    });
  }

  takeStepBackward = () => {
    console.log('Take a step forward clicked');
    this.setState( (prevState) => {
      if (this.state.day > 0) {
        return {
          card: prevState.card.slice(1),
          day: prevState.day - 1
        } 
      }
      
    });
  }

  render() {

    console.log(this.state.card);
    
    if (this.state.card !== null ) {
      return(
        <div className="main-container">
          <Nav />
          <h1>Total: {this.state.day}</h1>
          <button onClick={this.takeStepForward} >Step {1}</button>
          <button onClick={this.takeStepBackward} >Step Backward</button>
          {this.state.card.reverse().map( item => <Card day={item.day}/>)}
        </div>
      );
    } else {
      return <h2>Loading</h2>
    }
    
  }
  
}

export default App;
