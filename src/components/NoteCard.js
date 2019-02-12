import React from 'react';

import { FaTrash, FaPen } from 'react-icons/fa';

function getFormattedDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', { 
    day: 'numeric',
    month: 'long',
    hour12: true,
  });
}

export function NoteCard({ note, onDelete, onEdit, ...props }) {
  const { id, title, text, color: { value: color }, date } = note;

  return (
    <div className="NoteCard" style={{ borderLeftColor: color }}>
      <div className="NoteCard-header">
        <span style={{ color }}>{title}</span>
        <div className="NoteCard-header-icons">
          <button onClick={() => onEdit(note)}><FaPen /></button>
          <button onClick={() => onDelete(id)}><FaTrash /></button>
        </div>
      </div>
      <div className="NoteCard-body">
        <p>{text}</p>
      </div>
      <div className="NoteCard-footer">
        <span>{getFormattedDate(date)}</span>
      </div>
    </div>
  )
}
