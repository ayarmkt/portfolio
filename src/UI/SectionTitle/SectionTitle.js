import classes from './SectionTitle.module.css';
import React from 'react';

const SectionTitle = (props) => {
  return <h2 className={classes.h2}>{props.children}</h2>;
};

export default SectionTitle;
