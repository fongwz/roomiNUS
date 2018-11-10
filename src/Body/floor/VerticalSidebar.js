import React from 'react';
import {Grid,Image,Segment,Dropdown,Sidebar,Menu,Icon,Button,Modal,Header} from 'semantic-ui-react'
import {Booking} from './../Booking'

export class VerticalSidebar extends React.Component {
    constructor(props){
        super(props)
        this.setActive = this.setActive.bind(this)
        this.state = {"m800":false, "m1200":false,"m1300":false,"m1400":false, startTime:1200}    
    }

    setActive(event, data){
        this.setState(
            data.children.props.children == "0800"?
            {"m800":true, "m1200":false,"m1300":false,"m1400":false,startTime:800}
            :data.children.props.children == "1200"?
            {"m800":false, "m1200":true,"m1300":false,"m1400":false,startTime:1200}
            :data.children.props.children == "1300"?
            {"m800":false, "m1200":false,"m1300":true,"m1400":false,startTime:1300}
            : {"m800":false, "m1200":false,"m1300":false,"m1400":true,startTime:1400}
            )
    }

    render() {
        console.log(this.state)
        return (
            <Sidebar
                as={Menu}
                animation='overlay'
                direction='right'
                icon='labeled'
                vertical
                visible={this.props.visible}
                width='thin'
                inverted
                borderless
                style={{backgroundColor:"#30302D"}}  
            >
                <Menu.Item style={{color:"#acacac"}} header as='h3'>COM1-B04</Menu.Item>
                <Menu.Item active={this.state.m800} onClick={this.setActive} style={{color:"#f15c22"}} as='a'><b>0800</b></Menu.Item>
                <Menu.Item active={false} style={{backgroundColor:'#E85C51'}}><b>0900</b></Menu.Item>
                <Menu.Item active={false} style={{backgroundColor:'#E85C51'}}><b>1000</b></Menu.Item>
                <Menu.Item active={false} style={{backgroundColor:'#E85C51'}}><b>1100</b></Menu.Item>
                <Menu.Item active={this.state.m1200} onClick={this.setActive} style={{color:"#f15c22"}} as='a'><b>1200</b></Menu.Item>
                <Menu.Item active={this.state.m1300} onClick={this.setActive} style={{color:"#f15c22"}} as='a'><b>1300</b></Menu.Item>
                <Menu.Item active={this.state.m1400} onClick={this.setActive} style={{color:"#f15c22"}} as='a'><b>1400</b></Menu.Item>
                <Menu.Item>
                    <Modal 
                    trigger={<Button inverted color="orange">Book Room</Button>} 
                    closeIcon
                    size="tiny"
                    >
                        <Header size="huge" style={{color:"#f15c22",fontFamily:"cgothic"}} content='Booking' />
                        <Modal.Content>
                        <Booking startTime={this.state.startTime}/>
                        </Modal.Content>
                    </Modal>
                </Menu.Item>
            </Sidebar> 
        );
    }
}
