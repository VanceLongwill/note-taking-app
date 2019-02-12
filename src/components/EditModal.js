import React, { useState } from 'react';

import { FaRegWindowClose } from 'react-icons/fa';

import { NoteInput } from './NoteInput';
import { AddButton } from './AddButton';

export function EditModal({ note, onSave, onClose, ...props }) {
  const [inputText, setInputText] = useState(note.text);

  document.onkeydown = function(e) {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  return (
    <div className="EditModal" onClick={onClose}>
      <div className="EditModal-content" onClick={e => e.stopPropagation()}>
        <button type="button" className="EditModal-close" name="closeModal" onClick={onClose}><FaRegWindowClose /></button>
        <span><b>Editing: </b>{note.title}</span>
        <NoteInput 
          value={inputText}
          id="modalNoteInput"
          name="modalNoteInput"
          onChange={({ target: { value } }) => setInputText(value)} />
        <div>
          <AddButton
            text="Save changes"
            onClick={() => { 
              onSave(note.id, inputText);
              onClose();
            }} />
          <AddButton
            text="Close"
            onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
