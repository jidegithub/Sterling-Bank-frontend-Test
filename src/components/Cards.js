import React, { Fragment } from 'react';
import ImageUpload from './ImageUpload'
import Comment from './Comment'


const Card = (props) => {
    return ( 
        <Fragment>
            <div className = 'card mt2 ph1' style={{paddingRight: '42px'}}>
                <div className = "flex space-around" >
                    <div className = 'card-currency' > {props.currency} < div className = 'card-value' > {props.value} </div></div >
                    <div className = 'card-name flex' >
                        <p className = 'card-firstName mL-12' > {props.firstName} </p>  
                        <p className = 'card-lastName'>{props.lastName} </p> 
                    </div> 
                </div> 
                <div className="embediv">
                    <div className = 'card-comment hover-dark-blue'>
                        <Comment />
                    </div> 
                    <div className = 'card-image'>
                        <ImageUpload /> 
                    </div>
                </div>
                 
                <div className = 'flex space-around' >
                    <p className = 'card-merchant' > {props.merchant } </p> 
                    <p className = 'card-date' > {props.date}</p> 
                </div> 
            </div>   
        </Fragment>  
    );
}

export default Card;