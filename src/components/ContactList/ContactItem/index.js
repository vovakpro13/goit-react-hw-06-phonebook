import React, { Component } from 'react';
import propsTypes from 'prop-types';

import styles from 'components/ContactList/ContactItem/style.module.css';

class ContactItem extends Component {
  render() {
    const { name, number, onDelete } = this.props;

    return (
      <li className={styles.root}>
        <span className={styles.text}>
          {name}: {number}
        </span>

        <button onClick={onDelete}>Delete</button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  name: propsTypes.string,
  number: propsTypes.string,
  onDelete: propsTypes.func,
};

export default ContactItem;
