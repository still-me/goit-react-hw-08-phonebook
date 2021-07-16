import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Loader from './components/Loader';
import { fetchContactsRequest } from './redux/contacts/contacts-operations';
import { getIsLoading } from './redux/contacts/contacts-selectors';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <Section title="Phonebook">
          {this.props.isLoading && <Loader />}
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
