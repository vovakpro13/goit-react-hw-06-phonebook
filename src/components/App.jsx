import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from 'components/Section';
import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { defaultContacts } from 'constants/defaultContacts';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { contacts: defaultContacts, filter: '' };

    this.handleAddNewContact = this.handleAddNewContact.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }

  handleAddNewContact(newContact) {
    if (this.state.contacts.some(({ name }) => name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(10), ...newContact }, ...contacts],
    }));
  }

  handleChangeFilter({ target: { value: filter } }) {
    this.setState({ filter });
  }

  handleDeleteContact(deleteId) {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => deleteId !== id),
    }));
  }

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = contacts.filter(({ name }) =>
      name.startsWith(filter.trim())
    );

    return (
      <div>
        <Section title="Phonebook">
          <AddContactForm onAddContact={this.handleAddNewContact} />
        </Section>

        <Section title="Contacts">
          <div>
            <Filter filter={filter} onChange={this.handleChangeFilter} />
            <ContactList
              contacts={filteredContacts}
              onDeleteItem={this.handleDeleteContact}
            />
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
