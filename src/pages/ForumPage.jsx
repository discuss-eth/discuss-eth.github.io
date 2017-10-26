import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { Container, Dimmer, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchForums } from '../actions/logs';
import getLogKey from '../util/get-log-key';
import TriggerOnChange from '../components/TriggerOnChange';

export default connect(
  ({ logs: { [ getLogKey({ contractName: 'Registry', eventName: 'LogRegisterForum' }) ]: forums } }) => ({ forums }),
  { fetchForums }
)(
  class ForumPage extends Component {
    static propTypes = {
      forums: PropTypes.object
    };

    render() {
      const { fetchForums, forums } = this.props;

      return (
        <Container>
          <TriggerOnChange functions={[ fetchForums ]}/>

          {
            forums ? (
              <Dimmer.Dimmable>
                <Dimmer active={forums.loading} inverted/>
                <List>
                  {
                    _.map(
                      forums.logs,
                      ({ args: { administrator, newForumAddress, hashedName, name } }, ix) => (
                        <List.Item key={ix}>
                          <List.Header>{name}</List.Header>
                          <List.Content>Address: {newForumAddress}</List.Content>
                        </List.Item>
                      )
                    )
                  }
                </List>
              </Dimmer.Dimmable>
            ) : null
          }
        </Container>
      );
    }
  }
);