import React, { useEffect } from 'react'
import { Box, Button, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPostById } from '../redux/action'
import PostCard from './PostCard'
import PostAction from './PostAction'
import Loading from './Loading'

const SinglePost = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const state = useSelector((state) => state.reducer)
	const { post, loading } = state

	useEffect(() => {
		dispatch(getPostById(params.id))
	}, [dispatch, params.id])

	return (
		<Box>
			<Button
				variant='contained'
				style={{
					backgroundColor: '#0000e6',
					margin: '5% 0px 5% 45%'
				}}
			>
				<Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }}>
					ALL POSTS
				</Link>
			</Button>
			{loading === false ? (
				<Grid container>
					<Grid item md={2} />
					<Grid item xs={12} md={8}>
						<PostCard title={post.title} body={post.body} postId={post.id} />
						<PostAction postId={post.id} />
					</Grid>
					<Grid item md={2} />
				</Grid>
			) : (
				<Box style={{ marginLeft: '40%', marginTop: '10%' }}>
					<Loading />
				</Box>
			)}
		</Box>
	)
}

export default SinglePost
