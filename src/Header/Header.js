import React from 'react';
import {Grid,Segment,Search,Header,Button,Icon,Modal} from 'semantic-ui-react'
import {Login} from './Login'

export class PageHeader extends React.Component {
  render() {
    return (
        <div>
            <Grid columns='equal'>
                <Grid.Column>
                    <Segment ><Search /></Segment>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Segment  textAlign='center'><Header style={{marginTop:"0.5%"}}size="huge">RoomiNUS</Header></Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment clearing >
                        <Modal trigger={
                        <Button animated floated='right' primary size='large'>
                            <Button.Content visible>Sign In</Button.Content>
                            <Button.Content hidden><Icon name='sign-in' /></Button.Content>
                        </Button>
                        } closeIcon size='small'>
                            <Header icon='sign-in' content='Login' />
                            <Modal.Content>
                                <Login />
                            </Modal.Content>
                        </Modal>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    );
  }
}
