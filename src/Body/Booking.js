import React from 'react';
import {Form,Button} from 'semantic-ui-react'

export class Booking extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Form>
                <Form.Field>
                    <input placeholder='NUSNET ID' />
                </Form.Field>
                <Form.Field>
                    <input placeholder='Password' />
                </Form.Field>
                <Form.Field>
                    <input placeholder='Room' />
                </Form.Field>
                <Form.Field>
                    <input placeholder='Reason' />
                </Form.Field>
                <Button type='submit'>Book!</Button>
            </Form>
        );
    }
}
