import React from 'react';
import Container from '@material-ui/core/Container';

import AppHeader from '../components/app-header'
import AddUser from "../components/add-user";
import ListUsers from "../components/list-users";

import './app.css';

import { HashRouter as Router, Route } from 'react-router-dom';


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