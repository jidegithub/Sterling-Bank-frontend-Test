import React, { Component } from 'react';
import Modal from './Modal.js';

class List extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          title: "Payment comment",
          msg: "24k Bracelet"
        }
      ]
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }

  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <main key={index}>
        
            <div>{item.title}</div>
            <div>{item.msg}</div>
        
            <span><button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}><i className="far fa-edit"></i></button> {" "}</span>
           <span><button className="btn btn-danger" onClick={() => this.deleteItem(index)}><i className="far fa-trash-alt"></i></button></span> 
        </main>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
        {/* <div style={{ textAlign: "left" }}>
          <h4>comment</h4>
        </div> */}
        <div className="comment-box">
          <div className="comment">
            {brochure}
          </div>
        </div>
        <Modal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default List;