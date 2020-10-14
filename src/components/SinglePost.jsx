import React, { useEffect } from 'react'
import { Box, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
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
			{loading === false ? (
				<Grid container>
					<Grid item md={2} />
					<Grid item xs={12} md={8} style={{ marginTop: '7%' }}>
						<PostCard title={post.title} body={post.body} postId={post.id} />
						<PostAction />
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
