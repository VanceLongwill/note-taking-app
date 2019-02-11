import React, { useState } from 'react';

import { NoteInput } from './NoteInput';
import { AddButton } from './AddButton';

export function EditModal({ note, onSave, ...props }) {
  const [inputText, setInputText] = useState(note.text);
  return (
    <div className="EditModal">
      <div className="EditModal-content">
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
