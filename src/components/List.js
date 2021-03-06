import React, { Component } from 'react';
import Modal from './Modal';
import Icons from '../Icons'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          title: "comment title",
          msg: "make payment on the 3rd of march"
        }
      ]
    }
  }

  replaceModalItem = (index)=> {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails = (item)=> {
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
        
            <div><b>{item.title}</b></div>
            <div>{item.msg}</div>
            <div className="flex space-evenly">
              <span><button className="btn trash-btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                  onClick={() => this.replaceModalItem(index)}>
                  <span className="far"><Icons name={"edit1"} color={"#ffffff"} size={100}/></span> 
                  </button></span>
              {/* <span><button className="btn trash-btn btn-danger" onClick={() => this.deleteItem(index)}><i className="far fa-trash-alt">delete</i></button></span>  */}
            </div>
           
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
          id={this.props.id}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default List;