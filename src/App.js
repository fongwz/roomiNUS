import React, { Component } from 'react';
import {Divider} from 'semantic-ui-react'
import {PageHeader} from './Header/Header'
import {ControlPanel} from './Control/ControlPanel'
import {Body} from './Body/Body'

class App extends Component {
	constructor(){
		super()
		this.CPcallBack = this.CPcallBack.bind(this)
		this.state = {floor: true, list: false}
	}

	CPcallBack(floor, list){
		this.setState({floor: floor, list: list})
	}

	render() {
		return (
			<div >
				<PageHeader />
				<Divider clearing></Divider>
				<ControlPanel callBack={this.CPcallBack} display={this.state}/>
				<Divider hidden clearing></Divider>
				<Body display={this.state}/>
			</div>
		);
	}
}

export default App;
