import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Dimmer, Header, Icon } from 'semantic-ui-react';
import withLogs from '../util/with-logs';
import requireDeployed from '../util/require-deployed';
import UsersTable from '../components/UsersTable';

export default requireDeployed(
  withLogs(
    { propName: 'users', mapPropsToParameters: () => ({ contractName: 'Registry', eventName: 'LogRegisterUser' }) }
  )(
    class UsersPage extends Component {
      static propTypes = {
        users: PropTypes.object
      };

      render() {
        const { users } = this.props;

        return (
          <Container>
            <Header size="huge">
              <Header.Content>
                <Icon name="users"/> Users
              </Header.Content>
            </Header>

            <Dimmer.Dimmable>
              <Dimmer active={users.loading} inverted/>
              <UsersTable users={users.logs}/>
            </Dimmer.Dimmable>
          </Container>
        );
      }
    }
  )
);