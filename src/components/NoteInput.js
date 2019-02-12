import React from 'react';

export function NoteInput({ ...props }) {
  return (
    <div className="NoteInput">
      <input required type="text" maxLength="150" {...props}/>
    </div>
  )
}
