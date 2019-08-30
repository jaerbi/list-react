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
import { ValidatorComponent } from 'react-form-validator-core';

import './add-user.css';
import Button from "@material-ui/core/Button/Button";

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
	
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
		console.log(formData);
		
		getFormValue(defaultValue)
	};
	
	const { remote, position, name, description, date } = formData;
	
	return (
		<form className="add-user" onSubmit={ handleSubmit }>
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
			
			<TextField
				id="date"
				label="Birthday"
				type="date"
				defaultValue={ date }
				className={ classes.textField }
				onChange={ handleInputChange('date') }
			/>
			
			<Button
				variant="contained"
				color="primary"
				className={ classes.button }
				type="submit"
				required
			>
				Send
				<Icon className={ classes.rightIcon }>send</Icon>
			</Button>
		
		</form>
	);
};

export default AddUser;