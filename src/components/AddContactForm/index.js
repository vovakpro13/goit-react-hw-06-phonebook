import React, { Component } from 'react';
import propsTypes from 'prop-types';

import styles from 'components/AddContactForm/style.module.css';

class AddContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', number: '' };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleAddNewContact = this.handleAddNewContact.bind(this);
  }

  handleChangeName({ target: { value } }) {
    this.setState({ name: value });
  }

  handleChangeNumber({ target: { value } }) {
    this.setState({ number: value });
  }

  handleAddNewContact() {
    this.setState({ name: '', number: '' });
    this.props.onAddContact(this.state);
  }

  render() {
    const { name, number } = this.state;

    const isDisabled = !name.length || !number.length;

    return (
      <div className={styles.wrapper}>
        <span className={styles.label}>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={this.handleChangeName}
        />

        <span className={styles.label}>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChangeNumber}
        />

        <button
          disabled={isDisabled}
          className={styles.button}
          onClick={this.handleAddNewContact}
        >
          Add contact
        </button>
      </div>
    );
  }
}

AddContactForm.propTypes = {
  onAddContact: propsTypes.func,
};

export default AddContactForm;
