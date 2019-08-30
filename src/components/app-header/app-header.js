import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { MdFilterList, MdPlaylistAdd } from "react-icons/md";
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

import './app-header.css';

const useStyles = makeStyles({
	root: {
		width: 500
	},
});

function AppHeader({ history }) {
	
	const classes = useStyles();
	const [value, setValue] = useState(0);
	
	return (
		<div className="app-header">
			<Link to="/">React APP</Link>
			<BottomNavigation
				value={ value }
				onChange={ (event, newValue) => {
					setValue(newValue);
				} }
				showLabels
				className={ classes.root }
			>
				<BottomNavigationAction
					label="Users List" icon={ <MdFilterList/> }
					onClick={ () => {
						history.push('/list-users')
					} }
				/>
				<BottomNavigationAction
					label="Add User"
					icon={ <MdPlaylistAdd/> }
					onClick={ () => {
						history.push('/add-user')
					} }
				/>
			</BottomNavigation>
		</div>
	);
}

export default withRouter(AppHeader);