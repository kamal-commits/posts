const initialState = { posts: [], post: {} }
export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_POSTS_REQUEST':
			return {
				...state,
				posts: [],
				loading: true
			}

		case 'GET_ALL_POSTS':
			return {
				...state,
				posts: action.payload,
				loading: false
			}

		case 'GET_POST_REQUEST':
			return {
				...state,
				post: null,
				loading: true
			}

		case 'GET_POST':
			return {
				...state,
				post: action.payload,
				loading: false
			}

		case 'POST_LIKE':
			return {
				...state,
				likeData: action.payload
			}
		case 'POST_DISLIKE':
			return {
				...state,

				dislikeData: action.payload
			}
		default:
			return state
	}
}
