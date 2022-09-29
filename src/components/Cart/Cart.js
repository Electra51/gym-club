
import './Cart.css';
import image from '../../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';



const notify = () => {
    toast("Congratulation! you're done with new activity")
}

const Cart = (props) => {
    
    const { cart } = props;
    const [items, setItems] = useState([]);

    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
    console.log(localStorage.getItem("items",));
   
    let total = 0;
    for (const product of cart) {
        total = total + product.time;
    }
   
    
    return (
        <div>
             <div className=' my-profile'>
                <img src={image} alt="" />
                <div className='profile-info'>
                <h4>Electra Nur</h4>
                        <div className='location'>
                        <FontAwesomeIcon icon={(faLocationPin)}></FontAwesomeIcon>
                <p>Dhaka,Bangladesh</p>
               </div>
                  </div>
                </div>
                <div className="height-div">
                    <div>
                        <h3 className='yrs'>25<small>yrs</small></h3>
                        <p className='Age'>Age</p>
                    </div>
                    <div>
                    <h3 className='yrs'>5.4<small>"</small></h3>
                        <p className='Age'>Height</p>

                    </div>
                    <div>
                    <h3 className='yrs'>7.9<small>k</small></h3>
                        <p className='Age'>Follower</p>

                    </div>
                </div>
                <h4 className='Add-break'>Add a break</h4>
                <div className='break'>
                    
                <button onClick={()=>setItems(10)}>10m</button>
                        <button onClick={()=>setItems(20)}>20m</button>
                        <button onClick={()=>setItems(30)}>30m</button>
                        <button onClick={()=>setItems(40)}>40m</button>
                        <button onClick={()=>setItems(50)}>50m</button>
                   

                </div>
                <h4 className='Add-break'>Details</h4>
                <div className='details'>
                    <p>Total Time: {total}m</p>
                </div>
                <div className='details'>
                    <p>Break Time: {items}m</p>
            </div>
            
                <button onClick={notify} className='btn-activity'>Activity Completed</button>
        </div>
    );
};

export default Cart;