import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
			<h1>
					<Link exact to='/'>Noteful</Link>
			</h1>   
	);
}