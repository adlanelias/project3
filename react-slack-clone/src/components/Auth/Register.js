import React, { Component } from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render () {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for Clone
          </Header>
          <Form size="large">
            <Segment>
              <Form.input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" onChange={this.handleChange} />
              <Form.input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" onChange={this.handleChange} type="password" />
              <Form.input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation" onChange={this.handleChange} type="password" />
              <Button color="orange" fluid size="large">Submit</Button>
            </Segment>
          </Form>
          <Message>
            Already a user?
            <Link to="/login"></Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Register;
