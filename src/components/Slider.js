import React from 'react';

const Slider =({value, slideRender}) => {
    return (
        <div className='ranger'>
            <input type="range" min={0} max={3993} className="slider" onChange={slideRender} /> 
            <div style={{ textAlign: "center" }}> <span>Range between 0 and {value}</span></div>
        </div>       
    );
}

export default Slider;




