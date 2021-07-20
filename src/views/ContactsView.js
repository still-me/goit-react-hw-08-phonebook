import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { fetchContactsRequest } from '../redux/contacts/contacts-operations';

class ContactsView extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <Section title="Phonebook">
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

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsRequest()),
});

export default connect(null, mapDispatchToProps)(ContactsView);
