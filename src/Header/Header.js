import React from 'react';
import {Grid,Segment,Search,Header,Button,Icon,Modal} from 'semantic-ui-react'
import {Login} from './Login'
import './Header.css'

export class PageHeader extends React.Component {
  render() {
    return (
        <div>
            <Grid columns='equal' style={{backgroundColor:"#30302D"}}>
                <Grid.Column>
                    <Segment basic><Search /></Segment>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Segment basic textAlign='center'>
                    	<Header 
                    	style={{marginTop:"1%",fontFamily:"elron",color:"#f18322"}}
                    	size="huge"
                    	>
                    		RoomiNUS
                    	</Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic clearing >
                        <Modal size="tiny" trigger={
                        <Button inverted animated floated='right' size='large' color="orange">
                            <Button.Content visible>Sign In</Button.Content>
                            <Button.Content hidden><Icon name='sign-in' /></Button.Content>
                        </Button>
                        } closeIcon size='tiny'>
                            <Header size="huge" style={{color:"#f15c22",fontFamily:"cgothic"}} content='Login' />
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
