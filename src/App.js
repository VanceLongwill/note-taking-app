import React, { useState, useReducer } from 'react';
import './App.css';

import { noteReducer, actionTypes, initialNoteState } from './noteReducer';
import { colors } from './colors';

import { NoteInput } from './components/NoteInput';
import { NoteCard } from './components/NoteCard';
import { AddButton } from './components/AddButton';
import { ColorPicker } from './components/ColorPicker';

function App() {
  const [inputText, setInputText] = useState("");
  const [userColor, setColor] = useState(colors[0]);
  const [state, dispatch] = useReducer(noteReducer, initialNoteState);

  const { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } = actionTypes;
  function handleAdd() {
    dispatch({ type: CREATE_NOTE, text: inputText });
  }

  function handleDelete(id) {
    dispatch({ type: DELETE_NOTE, id });
  }

  function handleUpdate(id, text) {
    dispatch({ type: UPDATE_NOTE, id, text });
  }

  return (
    <div className="App">
      <NoteInput 
        value={inputText}
        name="noteInput"
        onChange={({ target: { value } }) => setInputText(value)}
        placeholder="Enter a new note" />
      <AddButton text="Add note" onClick={handleAdd} />
      <ColorPicker 
        value={userColor.id} 
        colors={colors} 
        onChange={({ target: { value } }) => setColor(colors.find(({ id }) => id === value))} />
      {state.notes.map(note =>
        <NoteCard 
          title={note.title}
          text={note.text}
          key={note.id} />
      )}
    </div>
  );
}

export default App;
