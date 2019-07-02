import React, { Component , Fragment} from 'react';
import axios from 'axios'
import Cards from './Cards'


class  PaymentList extends Component {
  
    state = {
        payments:[]
    };


    componentDidMount(){
        axios.get(`http://localhost:3000/payments?limit=168`).then(payment=>{
            console.log((payment.data.payments))
        this.setState({payments: payment.data.payments});
        });
    }

    render() {
        //const { first, last } = payment.user;
        return (
            <Fragment>
                <div className='grid'>
                    {this.state.payments.map((payments, index) => {
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
