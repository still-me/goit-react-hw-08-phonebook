import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logIn, removeError } from '../redux/auth/auth-operations';
import { getIsError } from 'redux/auth/auth-selectors';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    this.props.removeError();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Страница логина</h1>

        {this.props.isError && <p>email or password is wrong</p>}

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isError: getIsError(state),
});

const mapDispatchToProps = {
  onLogin: logIn,
  removeError: removeError,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
