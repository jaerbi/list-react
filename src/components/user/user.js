import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, CardContent, CardActions, Card } from '@material-ui/core';

const useStyles = makeStyles({
	card: {
		minWidth: 300,
		marginBottom: 10,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 24,
		fontWeight: 700
	},
	pos: {
		marginBottom: 12,
	},
});

const User = ({ user: { _id, name, position, birthdate, description, worksRemotely }, onDeleted }) => {
	const classes = useStyles();
	const bull = <span className={ classes.bullet }>•</span>;
	
	return (
		<Card className={ classes.card }>
			<CardContent className={ classes.info }>
				<Typography component="h2" className={ classes.title }>
					Name: { name }
				</Typography>
				<Typography >
					ID: { _id }
				</Typography>
				<Typography className={ classes.pos } color="textSecondary">
					{ bull }Position: { position }{ bull }
				</Typography>
				<Typography variant="body2" component="p">
					{ bull }Birthdate: { birthdate }{ bull }
					<br/>
					{ bull }Description: { description }{ bull }
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					variant="outlined"
					size="small"
					color="secondary"
					onClick={ onDeleted }
				>
					Delete User
				</Button>
			</CardActions>
		</Card>
	);
};

export default User;