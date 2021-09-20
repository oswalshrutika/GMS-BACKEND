// import qrcode from '../images/qrcode.jpeg'
import Navbar from './NavBar';

const Delivery = () => {
    const date = new Date(); 
    const today = new Date(date);
const tomorrow = new Date(today);
//  const date = moment()
// .utcOffset('+05:30')
// .format('YYYY-MM-DD hh:mm:ss a');

    return (
        <div>
            <Navbar></Navbar>
            <h2>Order received on : 
            {new Date().toLocaleString() + ''} <br/>
            </h2>
            <h2>Order deliverd in next 2 working days  
           
         
            </h2>

        </div>
    )
}

export default Delivery