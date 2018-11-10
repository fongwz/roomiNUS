import React from 'react';
import {Reveal, Card, Icon, Header, Divider } from 'semantic-ui-react'

export class COM102 extends React.Component {
    render() {
        return (
            <Reveal animated='small fade' style={{marginLeft:"1%"}}>
                <Reveal.Content visible>
                    <Card style={{backgroundColor:"#171717"}}>
                        <Card.Content textAlign="center">
                            <Card.Header style={{fontFamily:"cgothic",color:"#acacac"}}>COM1 - Level 1</Card.Header>
                            <Card.Description>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Divider hidden clearing></Divider>
                                <Header style={{fontFamily:"cgothic",color:"#acacac"}}>03 rooms available</Header>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Card>
                        <Card.Content  textAlign="center">
                            <Card.Header style={{fontFamily:"cgothic"}}>COM1 - Level 1</Card.Header>
                            <Card.Description>
                                <Header as='h4'>
                                    <Icon name='caret right' />
                                    <Header.Content>COM1-0101</Header.Content>
                                </Header>
                                <Header as='h4'>
                                    <Icon name='caret right' />
                                    <Header.Content>COM1-0102</Header.Content>
                                </Header>
                                <Header as='h4'>
                                    <Icon name='caret right' />
                                    <Header.Content>COM1-0103</Header.Content>
                                </Header>                            
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Reveal.Content>
            </Reveal>
        );
    }
}
