import React from 'react';


export function AddButton({ ...props }) {
  return <button className="AddButton" type="submit" {...props}>{props.text}</button>
}
