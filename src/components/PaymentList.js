import React, { Fragment} from 'react';
import Cards from './Cards'


const PaymentList = (props) =>{
    return(
        <Fragment>
            <div className='grid'>
                {props.payment.map((payments, index) => {
                    return <Cards
                        key={payments.id} 
                        value={payments.amount.value}
                        currency={payments.amount.currency}
                        date={payments.date}
                        merchant={payments.merchant}
                        firstName={payments.user.first}
                        lastName={payments.user.last}
                        email={payments.user.email}
                    />
                })};     
            </div>
        </Fragment>
    )  
}
  

    








// const PaymentList = () => {
//     const [paymentArray, setPaymentArray ] = useState({
//         payments:[]
//     });


//   useEffect(() => {
//     axios.get(`http://localhost:3000/payments`).then(payment=>{
//         setPaymentArray({
//             payments: payment.data
//         });
//     });
//   }, [])

//   return (
//     <div>
//         hello
//     </div>
//     );
// }

export default PaymentList;
