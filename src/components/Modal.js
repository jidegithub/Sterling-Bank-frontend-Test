import React, { Component } from 'react';
import axios from 'axios';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            msg: '',
        }
    }

    
    componentDidMount() {
        console.log(this.props)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            title: nextProps.title,
            msg: nextProps.msg,
        });
    }

    titleHandler(e) {
        this.setState({ title: e.target.value });
    }

    msgHandler(e) {
        this.setState({ msg: e.target.value });
    }

    handleSave = () => {
        const item = this.state;
        // this.props.saveModalDetails(item)
        let {msg, title} = this.state
        let data = {
            title,
            msg
        }
        // const commentToPost = (item.msg)

        axios.put(`http://localhost:3000/payments/${this.props.id}`,{
            "comment": data   
        })
        .then(res=>{
                console.log(res)
        })
        .catch()
    }   
    
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit comment</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{position: 'relative',bottom: '18px'}}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <p><span className="modal-label">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p> */}
                            <form className="form-popup">
                                <div className='form-group'>
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" row="3" value={this.state.msg} onChange={(e) => this.msgHandler(e)} />
                                </div>  
                            </form> 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;