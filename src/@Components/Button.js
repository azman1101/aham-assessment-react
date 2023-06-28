import React from 'react';
import { Button } from 'react-bootstrap';

export default function BlueButton(props) {
  const width = props.width || 'auto';
  const height = props.height || 'auto';
  return (
    <Button
      className="btn"
      style={{
        // backgroundColor: '#3BAFDA',
        // fontFamily: 'Poppins',
        // color: '#060A2F',
        borderRadius: 10,
        // border: 'none',
        width,
        height,
        ...props.style,
      }}
      {...props}
    >
      <div style={{ fontWeight: 'bold' }}>{props.children || 'Button'}</div>
    </Button>
  );
}
