import React from 'react';

const Slider =({value, slideRender}) => {
    return (
        <div className='ranger medium-font'>
            <input type="range" min={0} max={3993} className="slider" onChange={slideRender} />
            {/* <datalist id=tickmarks>
                <option>0</option>
                <option>20</option>
                <option>40</option>
                <option>60</option>
                <option>80</option>
                <option>100</option>
            </datalist>  */}
            <div style={{ textAlign: "center" }}> <span>Range between $0 and ${value}</span></div>
        </div>       
    );
}

export default Slider;




