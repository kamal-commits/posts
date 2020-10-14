import React, { useState } from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import { Box, IconButton } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { likePost, dislikePost } from '../redux/action'

const PostAction = ({ postId }) => {
	const [like, setLike] = useState(0)
	const [dislike, setDislike] = useState(0)
	const dispatch = useDispatch()

	const countLikes = () => {
		setLike(like + 1)
		dispatch(likePost(postId, like))
	}

	const countDislikes = () => {
		setDislike(dislike + 1)
		dispatch(dislikePost(postId, dislike))
	}

	return (
		<Box
			display='flex'
			justifyContent='space-around'
			marginTop='10px'
			marginBottom='10px'
		>
			<Box>
				<IconButton color='inherit'>
					<ThumbUpIcon onClick={countLikes} />
				</IconButton>
				{like > 0 ? like : null}
			</Box>
			<Box>
				<IconButton color='inherit'>
					<ThumbDownIcon onClick={countDislikes} />
				</IconButton>
				{dislike > 0 ? dislike : null}
			</Box>
		</Box>
	)
}

export default PostAction
