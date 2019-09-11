import React from 'react'


export default function Note(props) {
    console.log(props.match.params.noteId)
    const note = props.notes.find(n => n.id === props.match.params.noteId)
 const selectedFolder = props.folders.find(folder => folder.id === note.folderId)
    return (
        <div>
          <p>{note.name}</p>
          <p>{note.content}</p>
          <p>{selectedFolder.name}</p>
        </div>
    )
}