import React, { useState } from 'react';
import axios from 'axios';

// const idInStorage = ({id}) =>{
//   let id =  JSON.parse(sessionStorage.getItem('valueinStorage'))
//   return id; 
// }


const ImageUpload = (id) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
 

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', file);
    console.log(formData.entries)

    try {
      const res = await axios.post("http://localhost:3000/payments/5b996064dfd5b783915112f5/", 
       {
        "receipts": [formData]   
        },
         {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
 
    } catch (err) {
        err.response.status === 500 ? console.log('there was a problem with the server') : console.log(err.response.data.msg);
      }
    };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input style={{display:'none'}} type='file' id='customFile' onChange={onChange} />
          <label htmlFor='customFile' >
            <i className="fas fa-folder-plus"></i>
          </label>
          <span className='fileName'> {filename}</span>
        </div>    
        <button type='submit' id="submit-image" value="1"><i className="far fa-check-circle"></i></button>
      </form>
      {uploadedFile ? (
        <div>
          <div>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '20%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ImageUpload;



// {filename}
//<span className='fileName'> {filename ? <div className="rect">Select File First and submit</div> : "null"}</span>



// class ImageUpload extends Component {
//     constructor() {
//         super()
//         this.state = {
//             selectedFile:null
//         }
//     }
    
//         fileSelectedHandler = event =>{
//            this.setState({
//             selectedFile: event.target.files[0]
//            })
//            console.log(event.target.files[0]);
//         }
       
//         fileUploadHandler =() =>{
//            const formdata = new FormData();
//            formdata.append('image', this.state.selected, this.state.selectedFile.name);
//            axios.post('http://localhost:3000', formdata)
//            .then(res=> {
//                console.log(res);
//            });
//         }
       
//        render(){
//        return(
//            <Fragment>
//                 <div className='App'>
//                 <input style={{display: 'none'}} type='file' onChange={this.fileSelectedHandler}
//                 ref={fileInput => this.fileInput = fileInput} />
//                 <button onClick={() => this.fileInput.click()}>Attach Receipt</button>
//                 {/* <button onClick={this.fileUploadHandler}></button> */}
//                 </div>
//            </Fragment>)
//         }   
//     }
    
//     export default ImageUpload;