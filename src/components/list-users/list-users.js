import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import UserService from '../../services/users-service';
import User from '../user';

import './list-users.css';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	rightIcon: {
		marginLeft: theme.spacing(1),
	}
}));

const ListUsers = () => {
	const usersService = new UserService();
	const [usersRespond, setUsers] = useState([]);
	
	useEffect(() => {
		let isSubscribed = true;
		
		usersService.getAllUsers().then(usersRespond => {
			if (isSubscribed) {
				setUsers(usersRespond);
			}
		});
		
		return () => {
			isSubscribed = false
		}
	}, [usersRespond]);
	
	const onDeleted = (id) => {
		usersService.deleteUser(id);
	};
	const elements = usersRespond.map((user) => {
		const { _id } = user;
		
		return (
			<User
				key={ _id }
				user={ user }
				onDeleted={ () => onDeleted(_id) }
			/>
		);
	});
	
	const classes = useStyles();
	return (
		<div>
			<h2>List of Users</h2>
			<ul className="list-users">
				{ elements }
			</ul>
			
			<Button
				variant="contained"
				color="secondary"
				className={ classes.button }
				onClick={ () => usersService.deleteAllUsers() }
			>
				Delete All Users
				<DeleteIcon className={ classes.rightIcon }/>
			</Button>
		</div>
	
	);
};

export default ListUsers;