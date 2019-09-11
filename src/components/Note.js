import React from 'react'


export default function Note(props) {
 const selectedFolder = props.notes.map(item => props.folders.filter(folder => folder.id === item.folderId))
    return (
        <div>
        {selectedFolder}
        </div>
    )
}