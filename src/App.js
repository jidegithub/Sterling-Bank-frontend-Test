import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Slider from './components/Slider'
import PaymentList from './components/PaymentList'
import Cards from './components/Cards'
import List from './components/List'
import 'jquery/src/jquery';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      payments:[],
      value:0,
      uploading: false,
      images: [],
      selectedFile:null
    };
  }

  onSlideRender = (event) => {
    this.setState({ value: event.target.value })
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/payments?limit=160`).then(payment=>{
        console.log((payment.data.payments))
    this.setState({payments: payment.data.payments});
    });
  }

  
  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  render() {
    const  filteredPayment = this.state.payments.filter(money=>{
      return parseInt(money.amount.value) > 0 && parseInt(money.amount.value) <= this.state.value
     })
     
    return (
      <Fragment>
        <div>
          <header className="App-header">
            <Slider slideRender={this.onSlideRender} value={this.state.value}/>
          </header>
          <div>
            <PaymentList payment={filteredPayment}/>
            <Cards />
            <List />
          </div>
        </div>
      </Fragment>
      
    );
  }
}

export default App;



