import React from 'react';
import './Card.css'

const Card = (props) => {
  return (
    <div className='card_view'>
      <img className='dish_image' src={props.image}/>
			<span className='image_name'>{props.dishName}</span>
    </div>
  );
};

export default Card;
