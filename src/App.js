import React from 'react';
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import State from './dummy-store'
import Header from './Components/Header'
import Folders from './Components/Folders'
import Notes from './Components/Notes'


class App extends React.Component {
  state = State;
  
  

  render() {
    let folderList = this.state.folders.map((list) => {
      return (
        <li key={list.id}>{list.name}</li>
      )
    })

    let noteList = this.state.notes.map((list) => {
      let d = list.modified
      return (
        <li key={list.id}>
          <h2>{list.name}</h2>
          <span>Date modified on </span><Moment>{d}</Moment>
          <button type="button">Delete Note</button>
        </li>
      )
    });

  return (
    <>
      <Header />
      <main className='App'>
        <Folders folderList={folderList} />
        <Notes noteList={noteList} />
      </main>
    </>
  );
  }
}

export default App;