import React from 'react'
//import { Route } from 'react-router-dom'
import Nav from './Nav'
import Notes from './Notes'
import Header from './Header'
import './MainPage.css'

export default function MainPage(props) {
   return (
    <main>
      
			<Header />
      <container className="flexContainer">
      <Nav 
      folders ={props.folders}
      />
      <Notes 
      folders ={props.folders}
      notes ={props.notes}
      />
      </container>
    </main>
   )
}