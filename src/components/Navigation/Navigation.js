import { NavLink } from 'react-router-dom';

import routes from '../../routes';

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

const Navigation = () => (
  <nav>
    <NavLink to={routes.home} exact style={styles.link} activeStyle={styles.activeLink}>
      Main
    </NavLink>

    <NavLink to={routes.contacts} exact style={styles.link} activeStyle={styles.activeLink}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
