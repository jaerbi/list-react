// import React from 'react';
//
// import './user.css';
//
// import Button from "@material-ui/core/Button/Button";
//
// const User = ({ user: { _id, name, position, birthdate, description, worksRemotely }, onDeleted }) => {
//
// 	return (
// 		<li className="user">
// 			<p>ID: { _id }</p>
// 			<p>Name: { name }</p>
// 			<p>Position: { position }</p>
// 			<p>Birthdate: { birthdate }</p>
// 			<p>Description: { description }</p>
// 			<p>Works remotely: { worksRemotely } </p>
//
// 			<Button
// 				variant="outlined"
// 				color="secondary"
// 				onClick={ onDeleted }
// 			>
// 				Delete User
// 			</Button>
//
//
// 		</li>
// 	);
// };
//
// export default User;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './user.css';

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
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const User = ({ user: { _id, name, position, birthdate, description, worksRemotely }, onDeleted }) => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.card}>
			<CardContent className={classes.info}>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{bull}Name: { name }{bull}
				</Typography>
				<Typography variant="h5" component="h4">
					ID: {_id}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{bull}Position: { position }{bull}
				</Typography>
				<Typography variant="body2" component="p">
					Birthdate: { birthdate }
					<br />
					Description: { description }
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