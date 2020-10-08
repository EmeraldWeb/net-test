import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../Header';
import './Layout.css';

function modifyChild(child) {
  const updatedProps = {
    className: `${child.props.className} layout-cell`,
  };

  return React.cloneElement(child, updatedProps);
}

export default function Layout(props) {
  return (
    <Container className="layout">
      <div className="layout-cell">
        <Header>Netology</Header>
      </div>

      {React.Children.map(props.children, modifyChild)}
    </Container>
  );
}
