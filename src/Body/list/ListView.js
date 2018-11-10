import React from 'react';
import { Grid, Card } from 'semantic-ui-react'
import {COM101} from './COM101'
import {COM102} from './COM102'
import {COM103} from './COM103'
import {COM201} from './COM201'

export class ListView extends React.Component {
    render() {
        return (
            <Grid doubling columns={1} >
                <Grid.Row>
                    <Grid.Column>
                        <Card.Group centered itemsPerRow={2}>
                            <COM101 />
                            <COM102 />
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row style={{marginTop:"1%"}}>
                    <Grid.Column>
                        <Card.Group centered itemsPerRow={2}>
                            <COM103 />
                            <COM201 />
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
