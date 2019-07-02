import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Slider from './components/Slider'
import PaymentList from './components/PaymentList'
import Cards from './components/Cards'
import ImageUpload from './components/ImageUpload'
import Comment from './components/Comment'
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
            <Slider slideRender={this.onSlideRender}/>
          </header>
          <div>
            <PaymentList payment={filteredPayment}/>
            <Cards />
          </div>
        </div>
      </Fragment>
      
    );
  }
}

export default App;



