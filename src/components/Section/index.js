import React from 'react';
import propsTypes from 'prop-types';

import styles from 'components/Section/style.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: propsTypes.string.isRequired,
  children: propsTypes.element.isRequired,
};

export default Section;
