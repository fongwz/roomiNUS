import React from 'react';
import {Grid,Segment,Dropdown,Button,Header,Menu} from 'semantic-ui-react'
import TimeRangePicker from '@wojtekmaj/react-timerange-picker'

const months = [
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
]

const days = [ /* Corresponding Dates are date+3%7 */
	"MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"
]


export class ControlPanel extends React.Component {
	constructor(props){
		super(props)
		this.floorClick = this.floorClick.bind(this)
		this.listClick = this.listClick.bind(this)
		this.onChange = this.onChange.bind(this)

		var today = new Date()

		this.state = {
			month: months[today.getMonth()], date: today.getDate(), day: days[today.getDay()-1],
			floor: this.props.display.floor, list: this.props.display.list,
			time: ['10:00', '11:00']
		}
	}

	floorClick(){
		this.setState({floor:true, list: false})
		this.props.callBack(true, false)
	}

	listClick(){
		this.setState({floor:false, list: true})
		this.props.callBack(false, true)
	}

	onChange(time){
		this.setState({time})
	}

	render() {
		const dropdownDates = [
			{key: 1, text: this.state.date.toString(), value:this.state.date},
			{key: 2, text: (this.state.date+1).toString(), value:this.state.date+1},
			{key: 3, text: (this.state.date+2).toString(), value:this.state.date+2},
			{key: 4, text: (this.state.date+3).toString(), value:this.state.date+3},
			{key: 5, text: (this.state.date+4).toString(), value:this.state.date+4},
			{key: 6, text: (this.state.date+5).toString(), value:this.state.date+5}
		]		
		return (
            <Grid columns='equal'>
                <Grid.Column>
                    {/* This column contains nothing */}
                </Grid.Column>
                <Grid.Column width={7}>
                    <Segment basic textAlign='center'>
                    	<Header as='h2' style={{marginTop:"0.5%"}}size="huge">
                    	<Header.Content>THU</Header.Content>
	                     	<Menu compact style={{marginLeft:"1%",marginRight:"1%"}}>
	                    		<Dropdown 
		                    		style={{zIndex:10000000}} simple item inline 
		                    		options={dropdownDates} text={this.state.date.toString()} 
	                    		/>
	                		</Menu>
	                		<Header.Content>{this.state.month}</Header.Content>              		
                    	</Header>
                    	<TimeRangePicker 
                    		onChange={this.onChange} 
                    		value={this.state.time}
                    		disableClock={true}
                    		clearIcon={null}
                    	/>
                	</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic clearing>
                    	<Button.Group floated="right">
                    		<Button inverted color="blue" active={this.state.floor} onClick={this.floorClick}>Floor View</Button>
                    		<Button.Or />
                    		<Button inverted color="orange" active={this.state.list} onClick={this.listClick}>List View</Button>
                    	</Button.Group>
                    </Segment>
                </Grid.Column>
            </Grid>
	);
  }
}
