import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from 'components/Section';
import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { defaultContacts } from 'constants/defaultContacts';
import { LOCALSTORAGE_CONTACTS_KEY } from '../constants/common';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { contacts: defaultContacts, filter: '' };

    this.handleAddNewContact = this.handleAddNewContact.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }

  componentDidMount() {
    const contactsFromStorage = localStorage.getItem(LOCALSTORAGE_CONTACTS_KEY);

    if (contactsFromStorage) {
      const parsedContacts = JSON.parse(contactsFromStorage);
      return this.setState({ contacts: parsedContacts });
    }

    localStorage.setItem(LOCALSTORAGE_CONTACTS_KEY, JSON.stringify([]));
  }

  writeContactsToLocalStorage(contacts) {
    const jsonContacts = JSON.stringify(contacts);
    localStorage.setItem(LOCALSTORAGE_CONTACTS_KEY, jsonContacts);
  }

  handleAddNewContact(newContact) {
    if (this.state.contacts.some(({ name }) => name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => {
      const newContacts = [{ id: nanoid(10), ...newContact }, ...contacts];

      this.writeContactsToLocalStorage(newContacts);

      return { contacts: newContacts };
    });
  }

  handleChangeFilter({ target: { value: filter } }) {
    this.setState({ filter });
  }

  handleDeleteContact(deleteId) {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(({ id }) => deleteId !== id);

      this.writeContactsToLocalStorage(newContacts);

      return { contacts: newContacts };
    });
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
