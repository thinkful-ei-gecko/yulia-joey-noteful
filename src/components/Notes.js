import React from 'react'
// import Note from './Note'
import {Link} from 'react-router-dom'

export default function Notes(props) {
const notes = props.notes.map(note => 
<Link to={`/note/${note.id}`}><li><h2>{note.name}</h2><p>Date Modified: {new Date(note.modified).toDateString()}</p></li> </Link>)
    return (
        <ul>
            {notes}
        </ul>
    )
}