import React from 'react';

const Slider =({value, slideRender}) => {
    return (
        <div className='ranger'>
            <input type="range" min={0} max={3993} className="slider" onChange={slideRender} /> <span className="value">{value}</span>
        </div>       
    );
}

export default Slider;




