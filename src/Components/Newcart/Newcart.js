import React from 'react';
import './Newcart.css';

const Newcart = (props) => {
    const {name, phone, img, email} = props.cart;
    return (
        <div className="main-container">
            <div className="img2-container">
                <img src={img} alt="" />   
            </div>          
            <div className="body-container">
                <h3 className="hname">Last cart: {name}</h3>
                <p className="pname">Phone num: {phone}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default Newcart;