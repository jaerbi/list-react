import React from 'react';
import Container from '@material-ui/core/Container';

import AppHeader from '../app-header'
import AddUser from "../add-user";
import ListUsers from "../list-users";

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function App() {

	return (
		<Container maxWidth="sm" className="app">
			<Router>
				<AppHeader />
			
				<Route path="/" render={() => <h2>Welcome to React App</h2>} exact />
				<Route path="/list-users" component={ListUsers} />
				<Route path="/add-user" component={AddUser} />
			</Router>
		</Container>
	);
	
}