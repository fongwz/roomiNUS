import React from 'react';
import {Form,Button} from 'semantic-ui-react'

export class Login extends React.Component {
  render() {
    return (
        <Form>
            <Form.Field>         
                <input placeholder='NUSNET ID' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    );
  }
}
