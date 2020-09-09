import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.course;
    // const total = cart.reduce((total, course) => total + course.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + parseInt(course.price);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <FontAwesomeIcon size ='5x' icon={ faCartPlus }/>
            <p>Total enrolled: <strong>{cart.length}</strong></p>
            <p>Total price: <strong>${total}</strong></p>
        </div>
    );
};

export default Cart;