import React, { useState, useReducer } from 'react';

import { noteReducer, actionTypes, initialNoteState } from './noteReducer';
import { colors } from './colors';

import { NoteInput } from './components/NoteInput';
import { NoteCard } from './components/NoteCard';
import { AddButton } from './components/AddButton';
import { ColorPicker } from './components/ColorPicker';
import { EditModal } from './components/EditModal';

function App() {
  const [inputText, setInputText] = useState("");
  const [modalState, setModalState] = useState({ visible: false, note: null });
  const [userColor, setColor] = useState(colors[0]);
  const [notes, dispatch] = useReducer(noteReducer, initialNoteState);

  const { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } = actionTypes;
  function handleAdd() {
    dispatch({ type: CREATE_NOTE, text: inputText });
    setInputText("");
  }

  function handleDelete(id) {
    dispatch({ type: DELETE_NOTE, id });
  }

  function handleUpdate(id, text) {
    dispatch({ type: UPDATE_NOTE, id, text });
  }

  function handleModalOpen(note) {
    setModalState({ visible: true, note });
  }

  function handleModalClose() {
    setModalState({ visible: false, note: null });
  }

  return (
    <div className="App">
      <form className="InputContainer">
        {modalState.visible &&
            <EditModal 
              onClose={handleModalClose}
              onSave={handleUpdate}
              note={modalState.note} />}
        <label htmlFor="noteInput">Note text</label>
        <NoteInput 
          value={inputText}
          id="noteInput"
          name="noteInput"
          onChange={({ target: { value } }) => setInputText(value)}
          placeholder="Enter a new note" />
        <label htmlFor="colorPicker">Note Color</label>
        <ColorPicker
          selected={userColor.name} 
          id="colorPicker"
          colors={colors} 
          onChange={setColor} />
        <AddButton disabled={!inputText.length} text="Add note" onClick={handleAdd} />
      </form>
      <div className="NoteContainer">
        {notes.map(note =>
          <NoteCard 
            note={note}
            onDelete={handleDelete}
            onEdit={handleModalOpen}
            key={note.id} />
        )}
      </div>
    </div>
  );
}

export default App;
