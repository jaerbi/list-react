import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Select,
	TextField,
	InputLabel,
	FormControl,
	MenuItem,
	FormControlLabel,
	Checkbox,
	Icon
} from '@material-ui/core';
import Button from "@material-ui/core/Button/Button";

import './add-user.css';

import UserService from '../../services/users-service';


const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
	menu: {
		width: 200,
	},
	rightIcon: {
		marginLeft: theme.spacing(1),
	},
	button: {
		margin: theme.spacing(1),
	}
}));

const AddUser = () => {
	const classes = useStyles();
	const usersService = new UserService();
	
	const [open, setOpen] = useState(false);
	const defaultValue = {
		remote: false,
		position: 0,
		name: '',
		description: '',
		date: '1991-06-13'
	};
	const [formData, getFormValue] = useState(defaultValue);
	
	const handleInputChange = name => event => {
		const value = name === 'remote' ? event.target.checked : event.target.value;
		getFormValue({ ...formData, [name]: value });
	};
	
	const { remote, position, name, description, date } = formData;
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		
		usersService.addUser({
			"name": name,
			"position": position,
			"birthdate": date,
			"description": description,
			"worksRemotely": remote
		});
		
		// clear
		getFormValue(defaultValue)
	};
	
	return (
		<form className="add-user" onSubmit={ handleSubmit }>
			<h2>Create User</h2>
			<div className="form-section">
				<FormControl className={ classes.formControl }>
					<TextField
						type="text"
						required
						value={ name }
						label="Name"
						placeholder="Type your Name"
						onChange={ handleInputChange('name') }
						margin="normal"
						variant="outlined"
					/>
				</FormControl>
				
				<FormControl className={ classes.formControl }>
					<TextField
						multiline
						rowsMax="4"
						required
						value={ description }
						label="Description"
						placeholder="Type some description ..."
						onChange={ handleInputChange('description') }
						margin="normal"
						variant="outlined"
					/>
				</FormControl>
			</div>
			<div className="form-section">
				<FormControl className={ classes.formControl }>
					<InputLabel>Position</InputLabel>
					<Select
						open={ open }
						onClose={ handleClose }
						onOpen={ handleOpen }
						value={ position }
						onChange={ handleInputChange('position') }
					
					>
						<MenuItem value="0">
							<em>None</em>
						</MenuItem>
						<MenuItem value="Manager">Manager</MenuItem>
						<MenuItem value="Developer">Developer</MenuItem>
						<MenuItem value="QA">QA</MenuItem>
					</Select>
				</FormControl>
				
				<FormControlLabel
					control={
						<Checkbox
							color="primary"
							value="remote"
							checked={ remote }
							onChange={ handleInputChange('remote') }
						/>
					}
					label="Remote"
				/>
			</div>
			<TextField
				id="date"
				label="Birthday"
				type="date"
				defaultValue={ date }
				className={ classes.textField }
				onChange={ handleInputChange('date') }
			/>
			
			<div className="actions">
				<Button
					variant="contained"
					color="primary"
					className={ classes.button }
					type="submit"
				>
					Send
					<Icon className={ classes.rightIcon }>send</Icon>
				</Button>
				<Button
					variant="outlined"
					color="secondary"
					className={ classes.button }
					type="button"
					onClick={() => getFormValue(defaultValue)}
				>
					Clear
					<Icon className={ classes.rightIcon }>clear</Icon>
				</Button>
			</div>
		</form>
	);
};

export default AddUser;