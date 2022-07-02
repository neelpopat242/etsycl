import React from 'react'

function Card(props) {
    return (
        <div className="Card my-3">
            <img src={props.data['img-url']} className="d-block mx-auto" alt={props.data['product-id']} />
            <div className="product-details">
                <p>{props.data.title}</p>
                <p className="price">Rs <span>{(parseInt(props.data.price*25).toLocaleString("en-US"))}</span></p>
                <p>Arrives <strong>{props.data.date}</strong></p>
                
            </div>
        </div>
    )
}
export default Card;