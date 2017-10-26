import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Dimmer, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchForums } from '../actions/logs';
import getLogKey from '../util/get-log-key';
import TriggerOnChange from '../components/TriggerOnChange';
import ForumTable from '../components/ForumTable';

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

          <Header as='h1'>Forums</Header>

          {
            forums ? (
              <Dimmer.Dimmable>
                <Dimmer active={forums.loading} inverted/>
                <ForumTable forums={forums.logs}/>
              </Dimmer.Dimmable>
            ) : null
          }
        </Container>
      );
    }
  }
);