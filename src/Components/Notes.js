import React from 'react'

function Notes(props){
  return (
    <div>
      <ul>
        {props.noteList}
      </ul>
      <button type="button">Add Note</button>
    </div>
  )
}

export default Notes;