import React from 'react';
import Cards from './Cards';


const PaymentList = (props) =>{
    const handleId = () =>{
        console.log(sessionStorage.getItem('valueinStorage'))
    }  
      
    return(
        <>
            <div onClick={props.click} className='grid'>
                {props.payment.map((payments, index)=>{
                    sessionStorage.setItem('valueinStorage', payments.id);

                    return(
                            <Cards
                                onClick={handleId(payments.id)}
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
