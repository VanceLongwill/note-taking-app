import uuid from 'uuid/v4';

export const actionTypes = {
    CREATE_NOTE: "CREATE_NOTE",
    UPDATE_NOTE: "UPDATE_NOTE",
    DELETE_NOTE: "DELETE_NOTE",
};

export function noteReducer(state = initialNoteState, action) {
  const { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } = actionTypes;
  switch(action.type) {
    case CREATE_NOTE:
      return [
        ...state,
        { 
          title: `Note ${state.length + 1}`,
          text: action.text,
          id: uuid(),
        }
      ];
    case UPDATE_NOTE:
      return state.map(note => 
        note.id === action.id
          ? {
            ...note,
            text: action.text,
          }
          : note
      );
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
}

export const initialNoteState = [
  {
    title: "Note 1",
    text: "this is an example note",
    id: uuid(),
  },
  {
    title: "Note 2",
    text: "this is another example note",
    id: uuid(),
  },
  {
    title: "Note 3",
    text: "this is a third example note",
    id: uuid(),
  },
];
