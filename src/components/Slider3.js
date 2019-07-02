import React, { Component } from 'react';
import { SliderComponent } from '@syncfusion/ej2-react-inputs'



class Slider extends Component {
    render() {
        return (
            <div id='container'>
                <div className='wrap'>
                    <div className="sliderwrap">
                        <div className="labeltext">Range</div>
                        <SliderComponent id='range' type='Range' value={[30, 70]} />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Slider;
