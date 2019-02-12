import React, { useState } from 'react';

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
      <button type="button" className="EditModal-close" name="closeModal" onClick={onClose}>X</button>
      <div className="EditModal-content" onClick={e => e.stopPropagation()}>
        <NoteInput 
          value={inputText}
          id="modalNoteInput"
          name="modalNoteInput"
          onChange={({ target: { value } }) => setInputText(value)} />
        <AddButton
          text="Save changes"
          onClick={() => onSave(note.id, inputText)} />
      </div>
    </div>
  );
}
