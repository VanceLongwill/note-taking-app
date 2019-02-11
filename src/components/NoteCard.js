import React from 'react';


export function NoteCard({ title, text, onDelete, onEdit, ...props }) {
  return (
    <div className="NoteCard">
      <div className="NoteCard-header">
        <button onClick={onDelete}>Delete</button>
        <button onClick={onEdit}>Edit</button>
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
