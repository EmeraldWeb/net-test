import React from 'react';
import { FormLabel, Checkbox as CheckboxUI } from '@material-ui/core';

export default function Checkbox(props) {
  return (
    <FormLabel htmlFor={props.id}>
      <CheckboxUI
        type="checkbox"
        id={props.id}
        checked={props.isChecked}
        onChange={props.handleChange}
        color="primary"
      />
      {props.children}
    </FormLabel>
  );
}
