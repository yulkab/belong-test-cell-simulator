import React from 'react';
import classes from './Button.module.css';

const Button = (props: any) => {

   return (
      <button className={classes.btn} {...props}> {props.title} </button>
   )
};

export default Button;