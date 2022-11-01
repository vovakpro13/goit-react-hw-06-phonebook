import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';

import Section from 'components/Section';
import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { filterContacts } from 'helpers/filterContacts';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewContact,
  deleteContact,
  selectContacts,
  selectFilter,
  setFilter,
} from '../redux/slices/app-slice';

const App = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddNewContact = newContact => {
    if (contacts?.some(({ name }) => name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    dispatch(addNewContact({ id: nanoid(10), ...newContact }));
  };

  const handleDeleteContact = deleteId => dispatch(deleteContact(deleteId));

  const handleChangeFilter = ({ target: { value } }) =>
    dispatch(setFilter(value));

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
