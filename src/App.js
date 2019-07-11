import React, { Component } from 'react';
import axios from 'axios';
import Slider from './components/Slider'
import PaymentList from './components/PaymentList'
import Scrollbar from './components/Scrollbar';
import 'jquery/src/jquery';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './Animate.css';

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
    axios.get(`http://localhost:3000/payments?limit=168`)
      .then(payment=>{
        this.setState({payments: payment.data.payments});
      }
    );
  }

  // onClick = (event) => {
  //   alert(event.target.id)
  // }

  
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
      <>
        <div styles={{margin:'0, auto'}}>
            <div>
              <header className="App-header">
              <p>move slider to display filtered list</p>
                <Slider slideRender={this.onSlideRender} value={this.state.value}/>
              </header>
              <div>
                <Scrollbar>
                  <PaymentList payment={filteredPayment} click={this.onClick}/>
                </Scrollbar>  
              </div>
            </div>
        </div>     
      </> 
    );
  }
}

export default App;



