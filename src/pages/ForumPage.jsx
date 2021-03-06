import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Dimmer, Header, Icon } from 'semantic-ui-react';
import ForumTable from '../components/ForumTable';
import withLogs from '../util/with-logs';
import requireDeployed from '../util/require-deployed';

export default requireDeployed(
  withLogs(
    { propName: 'forums', mapPropsToParameters: () => ({ contractName: 'Registry', eventName: 'LogRegisterForum' }) }
  )(
    class ForumPage extends Component {
      static propTypes = {
        forums: PropTypes.object
      };

      render() {
        const { forums } = this.props;

        return (
          <Container>
            <Header size="huge">
              <Header.Content>
                <Icon name="tags"/> Forums
              </Header.Content>
            </Header>

            <Dimmer.Dimmable>
              <Dimmer active={forums.loading} inverted/>
              <ForumTable forums={forums.logs}/>
            </Dimmer.Dimmable>
          </Container>
        );
      }
    }
  )
);