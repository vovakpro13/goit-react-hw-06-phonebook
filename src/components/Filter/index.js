import React from 'react';
import propsTypes from 'prop-types';

import styles from 'components/Filter/style.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.header}>Find contacts by name</label>
      <input
        type="search"
        value={filter}
        onChange={onChange}
        className={styles.search}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: propsTypes.string.isRequired,
  onChange: propsTypes.func.isRequired,
};

export default Filter;
