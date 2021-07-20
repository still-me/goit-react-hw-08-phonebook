import React, { Component } from 'react';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from './components/Loader';
import Section from './components/Section';
import AppBar from './components/AppBar';
import routes from './routes';
import { getIsLoading } from './redux/contacts/contacts-selectors';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-page" */),
);

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Section>
        {this.props.isLoading && <Loader />}

        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.register} component={RegisterView} />
            <Route path={routes.login} component={LoginView} />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsView}
              redirectTo={routes.login}
            />
          </Switch>
        </Suspense>
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
