import React, { Component, Fragment } from 'react';
import axios from 'axios'

// class ImageUpload extends Component {
// constructor() {
//     super()
//     this.state = {
//         selectedFile:null
//     }
// }

//     fileSelectedHandler = event =>{
//        this.setState({
//         selectedFile: event.target.files[0]
//        })
//        console.log(event.target.files[0]);
//     }
   
//     fileUploadHandler =() =>{
//        const formdata = new FormData();
//        formdata.append('image', this.state.selected, this.state.selectedFile.name);
//        axios.post('http://localhost:3000', formdata)
//        .then(res=> {
//            console.log(res);
//        });
//     }
   
//    render(){
//    return(
//        <Fragment>
//             <div className='App'>
//             <input style={{display: 'none'}} type='file' onChange={this.fileSelectedHandler}
//             ref={fileInput => this.fileInput = fileInput} />
//             <button onClick={() => this.fileInput.click()}>Attach Receipt</button>
//             {/* <button onClick={this.fileUploadHandler}></button> */}
//             </div>
//        </Fragment>)
//     }   
// }

// export default ImageUpload;


import React from 'react';

const Uploader = () => {

    const onChange = (e) ={
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
    try{
        const res = axios.post('/payments/:id/receipts', formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });  
        const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath});
        }catch(err){

        }
    }

    //POST 

    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('choose file')




    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input type='file' className='' id='customFile' onChange={onChange}/>
                <label>
                {filename}
                </label>
                <input type ='submit' defaultValue='Upload />'
            </form> 
            {uploadedFile ? <div>{}</div>} 
        </Fragment>
    );
}

export default Uploader;






