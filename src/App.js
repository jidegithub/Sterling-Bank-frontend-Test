import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Slider from './components/Slider'
import NewPayment from './components/NewPayment'
import PaymentList from './components/PaymentList'
import Cards from './components/Cards'
import styled from 'styled-components';
import './App.scss';

class App extends Component {
  state = {
    payments:[],
    value:{} 
  }

  onSlideRender = (event)=>{
    console.log(event)
  }
  
  componentDidMount(){
    axios.get('http://localhost:3000/payments?limit=168').then(res=>{
        this.setState({payments:res.data})
        console.log(this.state.node)
      }) 
  
  }

  render() {
    return (
      <Fragment>
        <div>
          <header className="App-header">
            <Slider slideRender={this.onSlideRender}/>
          </header>
          <div>
            <NewPayment />
            <PaymentList />
            <Cards />
          </div>
        </div>
      </Fragment>
      
    );
  }
}

export default App;



