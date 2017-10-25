import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import controllable from 'react-controllables';

export default controllable(
  class CreateForumForm extends Component {
    static propTypes = { value: PropTypes.object, onChange: PropTypes.func.isRequired };

    handleChange = (e, { name, value }) => {
      console.log(name, value);
      this.props.onChange({ ...this.props.value, [ name ]: value });
    };

    render() {
      const { ...rest } = this.props;
      return (
        <Form {...rest}>
          <Form.Input placeholder="Ethereum Development" label="Forum Name" type="text" name="name"
                      onChange={this.handleChange}/>
          <Form.Input placeholder="10" label="Reputation Threshold" type="number" name="reputationThreshold"
                      onChange={this.handleChange}/>
          <Button type="submit">Create Forum</Button>
        </Form>
      );
    }
  },
  [ 'value' ]
);