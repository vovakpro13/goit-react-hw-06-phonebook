import React, { Component } from 'react';
import propsTypes from 'prop-types';

import styles from 'components/Section/style.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.header}>{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: propsTypes.string,
  children: propsTypes.element,
};

export default Section;
