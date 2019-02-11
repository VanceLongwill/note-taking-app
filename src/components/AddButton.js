import React from 'react';


export function AddButton({ ...props }) {
  return <button type="submit" {...props}>{props.text}</button>
}
