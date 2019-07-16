import React, { useState } from 'react'
import axios from 'axios'

export default function ImageUpload(props) {
  
  const [file, setfile] = useState({})
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
 

  const onChange = (e) => {
    setfile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', file);
    // console.log(formData.entries)

    // try {
    //   const res = await axios.post("http://localhost:3000/payments/5b996064dfd5b783915112f5/", 
    //    {
    //     "data": [formData]   
    //     },
    //     {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     },
    //   });

    //   const { fileName, filePath } = res.data;

    //   setUploadedFile({ fileName, filePath });
 
    // } catch (err) {
    //     err.response.status === 500 ? console.log('there was a problem with the server') : console.log(err.response.data.msg);
    //   }

    // URL EDITTED TO TAKE IN PROPS ID
    return axios({
      method: 'POST',
      url: `http://localhost:3000/payments/${props.id}/receipts`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    .then(res => {
      console.log(res)
        const { id, receipts } = res.data;  
        setUploadedFile({ id, receipts });
    })
    .catch(err => {
      console.log({...err})
    })
  };

  return (
    <div>     
      <>
        <form onSubmit={onSubmit} 
                                  style={{
                                    marginLeft: '-146px',
                                    marginBottom: '25px'
                                  }}
                                  >
          <div>
            <div className="file has-name is-right file is-info has-name">
              <label className="file-label margR">
                <input className="file-input" type="file" name="resume" id='customFile' onChange={onChange}/>
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">
                    Choose a file…
                  </span>
                </span>
                <span className="file-name">
                  {filename}
                </span>
              </label>
            </div>
          </div>    
          <button type='submit' id="submit-image" className='margL button is-info is-outlined is-medium' defaultValue='submit'>
           Submit
          </button>
        </form>
        {uploadedFile ? (
          <div style={{ position: 'relative',
                        top: '-55px',
                        left: '0px', width: '218px' }}>
            {/* <span classNameName='text-center' style={{fontSize: '10px'}}>{uploadedFile.id}</span> */}
            {
              uploadedFile.receipts ? 
              uploadedFile.receipts.map((reciept, index) => <img key={index} style={{ height: '30px', margin: '2px 3px 3px 3px' }} src={`http://localhost:3000${reciept.url}`} alt='' />) : null
            }
          </div>
        ) : null}
      </>
    </div>
  )
}
