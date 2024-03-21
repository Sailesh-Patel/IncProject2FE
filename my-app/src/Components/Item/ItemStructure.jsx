import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";
import "./ItemStructure.css";

function ItemStructure(props) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState();


  const handleAddToBasket = () => {
    axios
      .patch(`http://localhost:8088/item/add/${props.id}/6`)
      .then(() => {
        navigate("/items");
      })
      .catch((error) => alert('Item has already been added to the basket '));
  };

  const deleteItem = () => {
    axios
      .delete(`http://localhost:8088/item/delete/${props.id}`)
      .then(() => {
      })
      .catch((error) => alert('Item has already been deleted '));
  };

  return (
    <div id="itemCard" className="card-group d-inline-flex padding" style={{padding: "20px"}}>
      <div class="card border-dark mb-3" style={{width: "17%"}}>
        <ul class="list-group list-group-flush">
           <img src={props.image} width="120px"></img>         
          <li class="list-group-item">Name: {props.name} </li>
          <li class="list-group-item">Price: £{props.price} </li>



          <li class="list-group-item">Quantity: 
          {/* {props.quantity}  */}
<br></br>

                                       {/* <button onClick={() => setQuantity(props.quantity - 1)}  className="decrement" class="bi bi-dash-lg">-</button> */}
                                       
                                        <div id="quantityChange" className="quantity">{props.quantity}</div>

                                        {/* <button onClick={() => setQuantity(props.quantity + 1)} className="increment" class="bi bi-plus-lg">+</button> */}

</li> 

        </ul>
      <button type="button" onClick={handleAddToBasket} className="btn btn-success ">
        Add to basket
      </button>
      {/* <button type="button" onClick={deleteItem} className="btn btn-danger">Delete</button> */}
      </div>
    </div>
  );
}

ItemStructure.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ItemStructure;