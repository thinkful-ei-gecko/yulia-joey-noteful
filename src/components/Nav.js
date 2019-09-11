import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Nav() {
	return (<div className='Nav'>
	<NavLink className='Nav-item' activeClassName='is-active' to='/folder/:folder-id'>Folder 1 </NavLink> 
	<NavLink className='Nav-item' activeClassName='is-active' to='/folder/:folder-id'>Folder 2</NavLink> 
	<NavLink className='Nav-item' activeClassName='is-active' to='/folder/:folder-id'>Folder 3</NavLink> 
</div>)
}