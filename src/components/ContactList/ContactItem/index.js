import React from 'react';
import propsTypes from 'prop-types';

import styles from 'components/ContactList/ContactItem/style.module.css';

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <li className={styles.root}>
      <span className={styles.text}>
        {name}: {number}
      </span>

      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  name: propsTypes.string.isRequired,
  number: propsTypes.string.isRequired,
  onDelete: propsTypes.func.isRequired,
};

export default ContactItem;
