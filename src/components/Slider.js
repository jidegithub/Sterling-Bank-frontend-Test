import React, { Component } from 'react';
import styled from 'styled-components';

class Slider extends Component {

    state = {
        value: 0
      }
    
      

    
    render() {
        return (
            <Styles>
                <input type="range" min={0} max={3993} className="slider" onChange={this.props.slideRender} />
                <div className="value">val</div>
            </Styles>
        );
    }
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
      
          &::-moz-range-thumb {
            ${props => sliderThumbStyles(props)}
          }
    
    }
`;

