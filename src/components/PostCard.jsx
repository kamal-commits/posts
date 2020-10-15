import React from 'react'
import {
	Box,
	Button,
	Card,
	CardContent,
	makeStyles,
	Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	cardStyle: {
		height: '300px',
		backgroundColor: '#1287A5',
		[theme.breakpoints.down('sm')]: {
			height: '100%'
		}
	},
	titleStyle: {
		color: '#ffffff',
		fontFamily: 'Patua One',
		textDecoration: 'underline'
	},
	bodyStyle: {
		color: '#ffffff',
		paddingTop: '15px',
		fontSize: '20px'
	}
}))

const PostCard = ({ title, body, postId }) => {
	const classes = useStyles()
	return (
		<Box>
			<Card className={classes.cardStyle}>
				<CardContent>
					<Button style={{ color: '#ffffff' }}>POST : {postId}</Button>
					<Typography variant='h5' align='center' className={classes.titleStyle}>
						{title}
					</Typography>
					<Typography className={classes.bodyStyle}> {body} </Typography>
				</CardContent>
			</Card>
		</Box>
	)
}

export default PostCard
