import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Nav(props) {
	const navLinks = props.folders.map(folder => 
	<NavLink className='Nav-item' activeClassName='is-active' to={`/folder/${folder.id}`}>{folder.name}</NavLink> )
	return (
	<div className='Nav'>
		{navLinks}
	</div>
)
}