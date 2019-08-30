import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function AppHeader() {
	const [anchorEl, setAnchorEl] = useState(null);
	
	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}
	
	function handleClose() {
		setAnchorEl(null);
	}
	
	return (
		<div>
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={ handleClick }
			>
				Open Menu
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={ anchorEl }
				keepMounted
				open={ Boolean(anchorEl) }
				onClose={ handleClose }
			>
				<MenuItem onClick={ handleClose }>Users List</MenuItem>
				<MenuItem onClick={ handleClose }>Add User</MenuItem>
			</Menu>
		</div>
	);
}