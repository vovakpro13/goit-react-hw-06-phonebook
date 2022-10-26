import React, { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import Section from 'components/Section';
import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { defaultContacts } from 'constants/defaultContacts';
import { LOCALSTORAGE_CONTACTS_KEY } from 'constants/common';
import { filterContacts } from 'helpers/filterContacts';

const App = () => {
  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromStorage = localStorage.getItem(LOCALSTORAGE_CONTACTS_KEY);

    if (contactsFromStorage && JSON.parse(contactsFromStorage).length) {
      return setContacts(JSON.parse(contactsFromStorage));
    }

    setContacts(defaultContacts);
  }, []);

  useEffect(() => {
    if (contacts !== null) {
      localStorage.setItem(LOCALSTORAGE_CONTACTS_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleAddNewContact = newContact => {
    if (contacts?.some(({ name }) => name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(contacts => [{ id: nanoid(10), ...newContact }, ...contacts]);
  };

  const handleDeleteContact = deleteId => {
    setContacts(contacts => contacts?.filter(({ id }) => deleteId !== id));
  };

  const handleChangeFilter = ({ target: { value: filter } }) =>
    setFilter(filter);

  const filteredContacts = useMemo(
    () => filterContacts(contacts, filter),
    [contacts, filter]
  );

  return (
    <div>
      <Section title="Phonebook">
        <AddContactForm onAddContact={handleAddNewContact} />
      </Section>

      <Section title="Contacts">
        <div>
          <Filter filter={filter} onChange={handleChangeFilter} />
          {contacts && (
            <ContactList
              contacts={filteredContacts}
              onDeleteItem={handleDeleteContact}
            />
          )}
        </div>
      </Section>
    </div>
  );
};

export default App;
