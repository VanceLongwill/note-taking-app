import React from 'react';

export function NoteInput({ ...props }) {
  return (
    <input className="noteInput" type="text" maxLength="150" {...props}/>
  )
}
