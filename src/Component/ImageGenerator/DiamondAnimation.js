import React from 'react';
import './DiamondAnimation.css';

const DiamondAnimation = (props) => {
  return (
    <>

    <div className="diamond-container">
      <div className="diamond">
       
        <div className="face front"><img className='img' src={props.img} alt="" /></div>
        <div className="face back"><img className='img' src={props.img}/></div>
        <div className="face left"><img  className='img' src={props.img}/> </div>
        <div className="face right"><img  className='img' src={props.img}/></div>
        <div className="face top"><img  className='img' src={props.img}/></div>
        <div className="face bottom"><img className='img' src={props.img}/></div>
        <img className='diam img'  src={props.img} alt="" />
      </div>
     
    </div>
    </>
  );
};

export default DiamondAnimation;
