import React from 'react';
import {Reveal, Card, Icon, Header, Divider } from 'semantic-ui-react'

export class COM201 extends React.Component {
    render() {
        return (
            <Reveal animated='small fade' style={{marginLeft:"1%"}}>
                <Reveal.Content visible>
                    <Card>
                        <Card.Content>
                            <Card.Header>COM-2</Card.Header>
                            <Card.Description>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Header>01</Header>
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
                                    <Header.Content>COM2-0101</Header.Content>
                                </Header>
                                <Header as='h4'>
                                    <Icon name='caret right' />
                                    <Header.Content>COM2-0102</Header.Content>
                                </Header>
                                <Header as='h4'>
                                    <Icon name='caret right' />
                                    <Header.Content>COM2-0103</Header.Content>
                                </Header>                            
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Reveal.Content>
            </Reveal>
        );
    }
}
