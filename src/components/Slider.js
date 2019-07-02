import React from 'react';
import styled from 'styled-components';

const Slider =({value, slideRender}) => {
    return (
        <div className='ranger'>
            <input type="range" min={0} max={3993} className="slider" onChange={slideRender} />
            <div className="value">{value}</div>
        </div>       
    );
}

export default Slider;




