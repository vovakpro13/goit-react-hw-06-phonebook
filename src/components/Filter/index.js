import React, { Component } from 'react';
import propsTypes from 'prop-types';

import styles from 'components/Filter/style.module.css';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <div className={styles.wrapper}>
        <span className={styles.header}>Find contacts by name</span>
        <input
          type="search"
          value={filter}
          onChange={onChange}
          className={styles.search}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: propsTypes.string,
  onChange: propsTypes.func,
};

export default Filter;
