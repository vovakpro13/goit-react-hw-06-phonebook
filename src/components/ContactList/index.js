import React, { Component } from 'react';
import propsTypes from 'prop-types';

import ContactItem from 'components/ContactList/ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteItem } = this.props;

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
  }
}

ContactList.propTypes = {
  contacts: propsTypes.arrayOf(
    propsTypes.shape({
      id: propsTypes.string,
      name: propsTypes.string,
      number: propsTypes.string,
    })
  ),

  onDeleteItem: propsTypes.func,
};

export default ContactList;
