import React from 'react';


export function NoteCard({ note, onDelete, onEdit, ...props }) {
  const { id, title, text } = note;
  return (
    <div className="NoteCard">
      <div className="NoteCard-header">
        <button onClick={() => onDelete(note.id)}>Delete</button>
        <button onClick={() => onEdit(note)}>Edit</button>
        <h3>{title}</h3>
      </div>
      <div className="NoteCard-body">
        <p>{text}</p>
      </div>
      <div className="NoteCard-footer">
        <p>{/* date */}</p>
      </div>
    </div>
  )
}
