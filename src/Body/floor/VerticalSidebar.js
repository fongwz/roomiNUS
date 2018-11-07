import React from 'react';
import {Grid,Image,Segment,Dropdown,Sidebar,Menu,Icon,Button,Modal} from 'semantic-ui-react'
import {Booking} from './../Booking'

export class VerticalSidebar extends React.Component {
    constructor(props){
        super(props)    
    }

    render() {
        return (
            <Sidebar
                as={Menu}
                animation='overlay'
                direction='right'
                icon='labeled'
                vertical
                visible={this.props.visible}
                width='thin'
                borderless  
            >
                <Menu.Item header>COM2-0206</Menu.Item>
                <Menu.Item active={false} style={{backgroundColor:'#E85C51'}}><b>0900</b></Menu.Item>
                <Menu.Item active={false} style={{backgroundColor:'#E85C51'}}><b>1000</b></Menu.Item>
                <Menu.Item active={false} style={{backgroundColor:'#E85C51'}}><b>1100</b></Menu.Item>
                <Menu.Item as='a'>1200</Menu.Item>
                <Menu.Item as='a'>1300</Menu.Item>
                <Menu.Item as='a'>1400</Menu.Item>
                <Menu.Item>
                    <Modal 
                    trigger={<Button inverted color="blue">Book Room</Button>} 
                    closeIcon
                    size="small"
                    >
                        <Modal.Content>
                        <Booking />
                        </Modal.Content>
                    </Modal>
                </Menu.Item>
            </Sidebar> 
        );
    }
}
