import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Slider from './components/Slider'
import PaymentList from './components/PaymentList'
import List from './components/List'
import Scrollbar from './components/Scrollbar';
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
      selectedFile:null,
      id:[]
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

    axios.get(`http://localhost:3000/payments?limit=160`).then(id=>{
      console.log((id.data.payments[0].id))
      this.setState({id: id.data.payments.id});
    });
  }

  onClick = () =>{
    alert('test')
  }

  
  // removeImage = id => {
  //   this.setState({
  //     images: this.state.images.filter(image => image.public_id !== id)
  //   })
  // }

  render() {
    const  filteredPayment = this.state.payments.filter(money=>{
      return parseInt(money.amount.value) > 0 && parseInt(money.amount.value) <= this.state.value
     })
     
    return (
      <Fragment>
      <div styles={{margin:'0, auto'}}>
          <div>
            <header className="App-header">
              <Slider slideRender={this.onSlideRender} value={this.state.value}/>
            </header>
            <div>
              <Scrollbar>
                <PaymentList payment={filteredPayment} forid={this.onClick}/>
              </Scrollbar>  
            </div>
          </div>
      </div>
      <List />
          
      </Fragment>
      
    );
  }
}

export default App;



