import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'


export default function Note(props) {
    
    const note = props.notes.find(n => n.id === props.match.params.noteId)
 const selectedFolder = props.folders.find(folder => folder.id === note.folderId)
    return (
        <main>
          <Header />
          <p>{note.name}</p>
          <p>{note.content}</p>
          <p>{new Date(note.modified).toDateString()}</p>
          <p>{selectedFolder.name}</p>
          <button><Link exact to='/'>Go Back</Link></button>
        </main>
    )
}