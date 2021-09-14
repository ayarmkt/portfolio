import classes from './H2.module.css';
import React from 'react';

const H2 = (props) => {
  return <h2 className={classes.h2}>{props.children}</h2>;
};

export default H2;
