import React from 'react'

function Folders(props) {
  console.log(props)
  return (
    <div>
      <ul>
        {props.folderList}
      </ul>
      <button type='button'>Add Folder</button>
    </div>
  )
}

export default Folders