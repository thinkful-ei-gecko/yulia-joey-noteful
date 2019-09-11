import React from 'react'
//import { Route } from 'react-router-dom'
import Nav from './Nav'
import Notes from './Notes'
import Header from './Header'

export default function MainPage() {
   return (
    <main>
			<Header />
      <Nav />
      <Notes />
    </main>
   )
}