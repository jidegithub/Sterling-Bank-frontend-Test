import React, { Fragment } from 'react';

const Card = (props) => {
    return (
        <Fragment>
                <div className='card'>
                    <div className="flex space-around">
                        <p className='card-currency'>{props.currency} <span className='card-value'>{props.value}</span></p>
                        <div className='card-name flex'>
                            <p className='card-firstName mL-12'>{props.firstName}</p> 
                            <p className='card-lastName'>{props.lastName}</p>
                        </div>
                    </div>
                    
                    <input type='checkbox'/>
                    <div className='card-comment'></div>
                    <div className='flex space-around'>
                        <p className='card-merchant'>{props.merchant}</p>
                        <p className='card-date'>{props.date}</p>
                    </div>
                    <div className='card-image'></div>
                </div>  
        </Fragment>  
    );
}

export default Card;
