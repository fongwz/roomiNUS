import React from 'react';
import {Reveal, Card, Icon, Header, Divider } from 'semantic-ui-react'

export class COM103 extends React.Component {
    render() {
        return (
            <Reveal animated='small fade' style={{marginRight:"1%"}}>
                <Reveal.Content visible>
                    <Card>
                        <Card.Content>
                            <Card.Header>COM-1</Card.Header>
                            <Card.Description>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Header>03</Header>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Card>
                        <Card.Content>
                            <Card.Header>COM-1</Card.Header>
                            <Card.Description>
                                <Header as='h4'>
                                    <Icon name='caret right' />
                                    <Header.Content>COM1-0301</Header.Content>
                                </Header>
                                <Header as='h4'>
                                    <Icon name='caret right' />
                                    <Header.Content>COM1-0302</Header.Content>
                                </Header>
                                <Header as='h4'>
                                    <Icon name='caret right' />
                                    <Header.Content>COM1-0303</Header.Content>
                                </Header>                            
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Reveal.Content>
            </Reveal>
        );
    }
}
