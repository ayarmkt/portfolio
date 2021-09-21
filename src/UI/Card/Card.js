import classes from './Card.module.css';
import React from 'react';

const Card = (props) => {
  return (
    <section className={`${classes.card} ${props.className}`} id={props.id}>
      {props.children}
    </section>
  );
};

export default Card;
