import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Slider from './components/Slider'
import NewComment from './components/NewComment'
import PaymentList from './components/PaymentList'
import Cards from './components/Cards'
import styled from 'styled-components';
import './App.scss';

class App extends Component {
  state = {
    payments:[],
    value:0
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/payments?limit=168`).then(payment=>{
        // console.log((payment.data.payments))
    this.setState({payments: payment.data.payments});
    });
  }
  
 
  onSlideRender (event) {
    this.setState({value: parseInt(event.target.value)})
  }

  render() {
    
    return (
      <Fragment>
        <div>
          <header className="App-header">
            <Slider slideRender={this.onSlideRender}/>
          </header>
          <div>
            <NewComment />
            <PaymentList payment={this.state.payments}/>
            <Cards />
          </div>
        </div>
      </Fragment>
      
    );
  }
}

export default App;



