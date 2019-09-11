import React from 'react';
import Nav from './Nav';
import Notes from './Notes';
import Header from './Header'
import './FolderRoute.css'


export default function FolderRoute(props) {
  console.log(props.match.params.folderId)
  const folder = props.folders.find(f => f.id === props.match.params.folderId)  
  const selectedNotes = props.notes.filter(notes => notes.folderId === folder.id).map(note => <li><h2>{note.name}</h2><p>Date Modified: {new Date(note.modified).toDateString()}</p><p>{note.content}</p></li>)
  console.log(selectedNotes)
  return (
        <main>
          
					<Header />
          <container className="flexContainer">
          <Nav folders ={props.folders}/>
         <ul>{selectedNotes}</ul>
         </container>
        </main>
        
    )
}