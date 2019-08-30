import React from 'react';
import Container from '@material-ui/core/Container';

import AppHeader from '../app-header'
import AddUser from "../add-user";
import ListUsers from "../list-users";

import './app.css';

export default function App() {

	return (
		<Container maxWidth="sm">
			<AppHeader />
			
			<AddUser />
			
			<ListUsers />
		</Container>
	);
	
}