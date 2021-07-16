import React from 'react';
import './Show.css';

const Show = (props) => {
     //console.log(props)
    const { name, img, phone, email, cost } = props.user;
    return (
        <div className="card-main-container">
            <div className="card-container">
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
                <div className="show-container">
                    <div>
                        <h3>Name: {name}</h3>
                    </div>
                    <div>
                        <h4>Email: {email}</h4>
                    </div>
                    <div>
                        <p>Phone: {phone}</p>
                    </div>
                    <div>
                        <p>Cost: {cost}</p>
                    </div>
                    <div>
                        <button className="main-btn" onClick={() => props.handleAddProduct(props.user)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;