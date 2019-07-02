import React from 'react';
import styled from 'styled-components';

const Slider =({value, slideRender}) => {
    return (
        <Styles>
            <input type="range" min={0} max={3993} className="slider" onChange={slideRender} />
            <div className="value">{value}</div>
        </Styles>
    );
}


export default Slider;


const sliderThumbStyles = (props) => (`
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`);

const Styles = styled.div`
    display: flex;
    align-items: center;
    color: #888;
    margin-top: 2rem;
    margin-bottom: 2rem;

    .value {
        flex: 1;
        font-size: 2rem;
        }

    .slider {
        flex: 6;
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: #efefef;
        outline: none;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            ${props => sliderThumbStyles(props)}
          }
    }
`

