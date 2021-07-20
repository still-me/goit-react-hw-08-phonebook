import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to={routes.home}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Main
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to={routes.contacts}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
