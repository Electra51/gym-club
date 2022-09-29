import React from 'react';
import './Cart.css';
import image from '../../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = () => {
    toast("Congratulation! you're done with new activity")
}

const Cart = (props) => {
    const { cart } = props;

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
                    
                        <p>10m</p>
                        <p>20m</p>
                        <p>30m</p>
                        <p>40m</p>
                        <p>50m</p>
                   

                </div>
                <h4 className='Add-break'>Details</h4>
                <div className='details'>
                    <p>Total Time: {total}m</p>
                </div>
                <div className='details'>
                    <p>Break Time: 00.00m</p>
            </div>
            
                <button onClick={notify} className='btn-activity'>Activity Completed</button>
        </div>
    );
};

export default Cart;