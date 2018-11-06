import React from 'react';
import {FloorView} from './floor/FloorView'
import {ListView} from './list/ListView'

export class Body extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.display.floor && <FloorView />}
                {this.props.display.list && <ListView />}
            </div>
        );
    }
}
