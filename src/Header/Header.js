import React from 'react';
import {Grid,Segment,Search,Header,Button,Icon} from 'semantic-ui-react'

export class PageHeader extends React.Component {
  render() {
    return (
        <div>
            <Grid columns='equal'>
                <Grid.Column>
                    <Segment basic><Search /></Segment>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Segment basic textAlign='center'><Header style={{marginTop:"0.5%"}}size="huge">RoomiNUS</Header></Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment clearing basic>
                        <Button animated floated='right' primary size='large'>
                            <Button.Content visible>Sign In</Button.Content>
                            <Button.Content hidden><Icon name='sign-in' /></Button.Content>
                        </Button>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    );
  }
}
