import React from 'react';
import Nav from './Nav';
import Notes from './Notes';
import Header from './Header'


export default function FolderRoute() {
    return (
        <section>
					<Header />
          <Nav />
          <Notes />
        </section>
        
    )
}