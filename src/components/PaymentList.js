import React from 'react';
import Cards from './Cards';


const PaymentList = (props) =>{
        
    return(
        <>
            <div onClick={props.click} className='grid'>
                {props.payment.map((payments, index)=>{
                    
                    return(
                            <Cards
                            className = "roll-in-blurred-left"
                                key={payments.id}
                                id={payments.id}  
                                value={payments.amount.value}
                                currency={payments.amount.currency}
                                date={payments.date}
                                merchant={payments.merchant}
                                firstName={payments.user.first}
                                lastName={payments.user.last}
                                email={payments.user.email}
                            />  
                    ) 
                    
                })}    
            </div>
        </>
    )  
}
  
export default PaymentList;
