import { Box, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../redux/action'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'
import PostAction from './PostAction'
import Loading from './Loading'
const useStyles = makeStyles((theme) => ({
	typographyStyle: {
		textAlign: 'center',
		padding: '25px 0px',
		fontFamily: 'Piedra',
		fontSize: '40px',
		textDecoration: 'underline'
	},
	loadingStyle: {
		marginLeft: '40%',
		[theme.breakpoints.down('sm')]: {
			marginLeft: '10%'
		}
	}
}))

const Posts = () => {
	const [titleSearch, setTitleSearch] = useState('')
	const classes = useStyles()
	const state = useSelector((state) => state.reducer)
	const { posts, loading } = state
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllPosts())
	}, [dispatch])

	const filteredPosts =
		loading === false
			? posts.filter((post) =>
					post.title.toLowerCase().includes(titleSearch.toLowerCase())
			  )
			: null

	return (
		<Box>
			<Box
				display='flex'
				justifyContent='space-evenly'
				style={{ marginTop: '5%', marginBottom: '0%' }}
			>
				<TextField
					variant='outlined'
					type='text'
					label='Search Post..'
					onChange={(e) => setTitleSearch(e.target.value)}
				/>
			</Box>
			<Typography className={classes.typographyStyle}> ALL POSTS </Typography>
			<Grid container>
				{loading === false ? (
					filteredPosts.map((item, index) => (
						<Grid item xs={12} md={6} key={index} style={{ padding: '0px 15px' }}>
							<Link to={'/' + item.id} style={{ textDecoration: 'none' }}>
								<PostCard title={item.title} body={item.body} postId={item.id} />
							</Link>
							<PostAction postId={item.id} />
						</Grid>
					))
				) : (
					<Box className={classes.loadingStyle}>
						<Loading />
					</Box>
				)}
			</Grid>
		</Box>
	)
}

export default Posts
