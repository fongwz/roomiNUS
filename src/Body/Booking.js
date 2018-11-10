import React from 'react';
import {Form,Button,Dropdown,Header,Divider} from 'semantic-ui-react'
import InputRange from 'react-input-range';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export class Booking extends React.Component {
    constructor(props){
        super(props)
        this.state = {room: "Discussion Room 1 -- COM1-B04"}
    }

    render() {
        const dropdownDates = [
            {key: 1, text: "Discussion Room 1 -- COM1-B04", value:1},
            {key: 2, text: "Discussion Room 2 -- COM1-B04", value:1},
            {key: 3, text: "Discussion Room 3 -- COM1-B04", value:2},
            {key: 4, text: "Discussion Room 4 -- COM1-B04", value:3},
            {key: 5, text: "Programming Lab 1 -- COM1-0101", value:4},
        ]
        return (
            <Form size="large">
                <Form.Field>
                    <input style={{fontFamily:"cgothic"}} placeholder='NUSNET ID' />
                </Form.Field>
                <Form.Field>
                    <input style={{fontFamily:"cgothic"}} placeholder='Password' />
                </Form.Field>
                <Form.Field>
                    <Dropdown
                        className="cp-dropdown" 
                        style={{zIndex:100,fontFamily:"cgothic"}} 
                        selection 
                        options={dropdownDates} text={this.state.room} 
                    />
                </Form.Field>
                <Form.Field>
                    <input style={{fontFamily:"cgothic"}} placeholder='Reason' />
                </Form.Field>
                <Divider clearing hidden/>
                <Form.Field>
                    <Header style={{fontFamily:"cgothic"}} content="Time" />
                    <Range
                        style={{fontFamily:"cgothic"}}
                        marks={{800:"0800",900:"0900",1000:"1000",1100:"1100",1200:"1200",1300:"1300",1400:"1400",1500:"1500"}} 
                        min={800}
                        max={1500}
                        defaultValue={[this.props.startTime,this.props.startTime+100]}
                    />   
                </Form.Field>
                <Divider clearing hidden />
                <Divider clearing hidden />
                <Button style={{fontFamily:"cgothic"}} type='submit' inverted color="orange">Submit</Button>
            </Form>
        );
    }
}
