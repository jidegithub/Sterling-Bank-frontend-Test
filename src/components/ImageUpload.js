import React, { Component, Fragment } from 'react';
import axios from 'axios'

class ImageUpload extends Component {
constructor() {
    super()
    this.state = {
        selectedFile:null
    }
}

    fileSelectedHandler = event =>{
       this.setState({
        selectedFile: event.target.files[0]
       })
       console.log(event.target.files[0]);
    }
   
    fileUploadHandler =() =>{
       const formdata = new FormData();
       formdata.append('image', this.state.selected, this.state.selectedFile.name);
       axios.post('http://localhost:3000', formdata)
       .then(res=> {
           console.log(res);
       });
    }
   
   render(){
   return(
       <Fragment>
            <div className='App'>
            <input style={{display: 'none'}} type='file' onChange={this.fileSelectedHandler}
            ref={fileInput => this.fileInput = fileInput} />
            <button onClick={() => this.fileInput.click()}>Attach Receipt</button>
            {/* <button onClick={this.fileUploadHandler}></button> */}
            </div>
       </Fragment>)
    }   
}

export default ImageUpload;





