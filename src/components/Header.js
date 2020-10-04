import React from 'react';
import { Typography } from '@material-ui/core';

export default function Header(props) {
  return <Typography variant="h1">{props.children}</Typography>;
}
