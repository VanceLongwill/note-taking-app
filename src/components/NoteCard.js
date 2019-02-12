import React from 'react';


export function NoteCard({ note, onDelete, onEdit, ...props }) {
  const { id, title, text } = note;
  return (
    <div className="NoteCard">
      <div className="NoteCard-header">
        <span>{title}</span>
        <div className="NoteCard-header-icons">
          <button onClick={() => onDelete(note.id)}>Delete</button>
          <button onClick={() => onEdit(note)}>Edit</button>
        </div>
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
