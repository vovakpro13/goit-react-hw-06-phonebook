import React from 'react';
import propsTypes from 'prop-types';

import ContactItem from 'components/ContactList/ContactItem';

const ContactList = ({ contacts, onDeleteItem }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          {...contact}
          onDelete={() => onDeleteItem(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: propsTypes.arrayOf(
    propsTypes.shape({
      id: propsTypes.string,
      name: propsTypes.string,
      number: propsTypes.string,
    })
  ).isRequired,

  onDeleteItem: propsTypes.func.isRequired,
};

export default ContactList;
