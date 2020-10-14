import Axios from 'axios'

export const getAllPosts = () => async (dispatch) => {
	dispatch({
		type: 'GET_ALL_POSTS_REQUEST'
	})
	try {
		const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
		dispatch({
			type: 'GET_ALL_POSTS',
			payload: response.data
		})
	} catch (error) {
		console.log(error)
	}
}

export const getPostById = (id) => async (dispatch) => {
	dispatch({
		type: 'GET_POST_REQUEST'
	})
	try {
		const response = await Axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		)
		dispatch({
			type: 'GET_POST',
			payload: response.data
		})
	} catch (error) {
		console.log(error)
	}
}

export const likePost = (postId, like) => async (dispatch) => {
	try {
		const response = await Axios.put(
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		)
		console.log(response)
		dispatch({
			type: 'LIKE_POST',
			payload: like
		})
	} catch (error) {
		console.log(error)
	}
}

export const dislikePost = (postId, dislike) => async (dispatch) => {
	try {
		const response = await Axios.put(
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		)
		console.log(response)
		dispatch({
			type: 'DISLIKE_POST',
			payload: dislike
		})
	} catch (error) {
		console.log(error)
	}
}
