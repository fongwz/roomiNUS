import React from 'react';
import {Form,Button} from 'semantic-ui-react'

export class Login extends React.Component {
  render() {
    return (
        <Form size="large">
            <Form.Field>         
                <input style={{fontFamily:"cgothic"}} placeholder='NUSNET ID' />
            </Form.Field>
            <Form.Field>
                <input style={{fontFamily:"cgothic"}} placeholder='Password' />
            </Form.Field>
            <Button style={{fontFamily:"cgothic"}} type='submit' inverted color="orange">Submit</Button>
        </Form>
    );
  }
}
