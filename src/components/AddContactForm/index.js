import React, { useMemo, useState } from 'react';
import propsTypes from 'prop-types';

import styles from 'components/AddContactForm/style.module.css';

const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangeNumber = ({ target: { value } }) => setNumber(value);

  const handleAddNewContact = () => {
    setName('');
    setNumber('');

    onAddContact({ name, number });
  };

  const isDisabled = useMemo(
    () => !name.length || !number.length,
    [name, number]
  );

  return (
    <form onSubmit={handleAddNewContact} className={styles.wrapper}>
      <label className={styles.label}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
        required
        value={name}
        onChange={handleChangeName}
      />

      <label className={styles.label}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChangeNumber}
      />

      <button
        type="submit"
        disabled={isDisabled}
        className={styles.button}
        onClick={handleAddNewContact}
      >
        Add contact
      </button>
    </form>
  );
};

AddContactForm.propTypes = {
  onAddContact: propsTypes.func.isRequired,
};

export default AddContactForm;
