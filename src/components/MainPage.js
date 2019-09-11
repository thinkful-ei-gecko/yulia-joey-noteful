import React from 'react'
//import { Route } from 'react-router-dom'
import Nav from './Nav'
import Notes from './Notes'
import Header from './Header'

export default function MainPage(props) {
   return (
    <main>
			<Header />
      <Nav 
      folders ={props.folders}
      />
      <Notes 
      folders ={props.folders}
      notes ={props.notes}
      />
    </main>
   )
}