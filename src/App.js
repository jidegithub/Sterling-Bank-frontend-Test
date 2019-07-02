import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Slider from './components/Slider'
import NewComment from './components/NewComment'
import PaymentList from './components/PaymentList'
import Cards from './components/Cards'
import ImageUpload from './components/ImageUpload'
import CommentBox from './components/CommentBox'
import Comments  from './components/Comments'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      payments:[],
      value:0,
      comments: []
    };
  }

  onSlideRender = (event) => {
    this.setState({ value: event.target.value })
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/payments?limit=168`).then(payment=>{
        // console.log((payment.data.payments))
    this.setState({payments: payment.data.payments});
    });


    /*global Ably*/
    const channel = Ably.channels.get('comments');
   
    channel.attach();
      channel.once('attached', () => {
        channel.history((err, page) => {
          // create a new array with comments only in an reversed order (i.e old to new)
          const comments = Array.from(page.items, item => item.data)
   
          this.setState({ comments });
   
          channel.subscribe((msg) => {
            const commentObject = msg.data;
            this.handleAddComment(commentObject);
          })
        });
      });
  }

  handleAddComment = (comment) => {
    this.setState(prevState => {
      return {
        comments: prevState.comments.concat(comment)
      };
    });
  }

  render() {
    const  filteredPayment = this.state.payments.filter(money=>{
      return parseInt(money.amount.value) > 0 && parseInt(money.amount.value) <= this.state.value
     })
     //console.log(filteredPayment)

    return (
      <Fragment>
        <div>
          <header className="App-header">
            <Slider slideRender={this.onSlideRender}/>
          </header>
          <div>
            <NewComment />
            <ImageUpload />
            <PaymentList payment={filteredPayment}/>
            <Cards />
            <section className="section">
              <div className="container">
                <div className="columns">
                  <div className="column is-half is-offset-one-quarter">
                    <CommentBox handleAddComment={this.handleAddComment} />
                    <Comments comments={this.state.comments} />
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </Fragment>
      
    );
  }
}

export default App;



