import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = ({id}) => {
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
    formData.append('file', file);
    console.group(formData.entries)

    try {
      const res = await axios.post('/{id}/receipts', formData, {
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
    <Fragment>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='file'
            id='customFile'
            onChange={onChange}
          />
          <label htmlFor='customFile'>
            {filename}
          </label>
        </div>    
        <input
          type='submit'
          value='Upload'
        /><i className='fab fa-react'></i>
      </form>
      {uploadedFile ? (
        <div>
          <div>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;



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