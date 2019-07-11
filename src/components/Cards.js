import React from 'react';
import ImageUpload from './ImageUpload'
import Comment from './Comment'


const Card = (props) => {
    return ( 
        <>
            <div className = 'card mt2 ph1 fadeIn data-wow-duration="1000ms" data-wow-delay="300ms"' style={{paddingRight: '60px'}}>
                <div className = "re-flex flex space-around" >
                    <div className = 'card-currency' > {props.currency}  {props.value} </div>
                    <div className = 'card-name flex' >
                        <p className = 'card-firstName mL-12' > {props.firstName} </p>  
                        <p className = 'card-lastName'>{props.lastName} </p> 
                    </div> 
                </div> 
                <div className="embediv">
                    <div className = 'card-comment'>
                        <Comment  id={props.id} />
                    </div> 
                    <div className = 'card-image'>
                        {/* props.id needed to make the request dynamic */}
                        <ImageUpload id={props.id} /> 
                    </div>
                </div>
                 
                <div className = 're-flex flex space-around' >
                    <p className = 'card-merchant' > {props.merchant } </p> 
                    <p className = 'card-date' > {props.date}</p> 
                </div> 
                {/* <div style={{marginTop: '29px'}}> {props.id}</div> */}
            </div>   
        </>  
    );
}

export default Card;