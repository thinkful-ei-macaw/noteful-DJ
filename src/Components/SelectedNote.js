import React from 'react'
import NoteView from './NoteView'

function SelectedNote(props) {
  return (
    <>
    <button type="button">Go Back</button>
    <li>{props.note}</li>
    <NoteView selectedNote={props.note} content={props.content}/>
    </>
    )
}

export default SelectedNote;