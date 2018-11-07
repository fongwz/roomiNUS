import React from 'react';
import {Grid, Image, Segment, Dropdown, Sidebar} from 'semantic-ui-react'
import {VerticalSidebar} from './VerticalSidebar'
import './FloorView.css'

export class FloorView extends React.Component {
    constructor(props){
        super(props)
        this.onAreaChange = this.onAreaChange.bind(this)
        this.onLevelChange = this.onLevelChange.bind(this)
        this.onImageClick = this.onImageClick.bind(this)

        this.state = {area: 'COM1', level: 'LEVEL 2', visible: false}
    }

    onAreaChange(event, data){
        this.setState({area: data.value})
    }

    onLevelChange(event, data){
        this.setState({level: data.value})
    }

    onImageClick(){
        this.setState({visible: !this.state.visible})
    }

    render() {
        const dropdownRooms = [
            {key: 1, text: 'COM1', value:'COM1'},
            {key: 2, text: 'COM2', value:'COM2'}
        ]
        const dropdownLevels = [
            {key: 1, text: 'BASEMENT', value:'BASEMENT'},
            {key: 2, text: 'LEVEL 1', value:'LEVEL 1'},
            {key: 3, text: 'LEVEL 2', value:'LEVEL 2'},
            {key: 4, text: 'LEVEL 3', value:'LEVEL 3'}
        ]
        return (
            <div>
                <Sidebar.Pushable>
                    <VerticalSidebar visible={this.state.visible}/>
                    <Sidebar.Pusher dimmed={false}>
                        <Image 
                        className="floorview-image" 
                        centered 
                        src={this.state.area=="COM1"?"./com_1.png":"./com_2.png"} 
                        size='massive' 
                        onClick={this.onImageClick}
                        /> 
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                 <Grid columns='equal'>
                        <Grid.Column>
                            <Segment textAlign='right' size='massive'>
                                <Dropdown
                                    selection closeOnChange
                                    style={{zIndex:100}} compact 
                                    options={dropdownRooms} text={this.state.area}
                                    onChange={this.onAreaChange} 
                                />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Segment textAlign='center' size='massive'>
                                <Dropdown
                                    selection closeOnChange
                                    style={{zIndex:100}} compact 
                                    options={dropdownLevels} text={this.state.level}
                                    onChange={this.onLevelChange} 
                                />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            {/*Empty column*/}
                        </Grid.Column>
                    </Grid>   
            </div>
        );
    }
}
