import React from 'react'
import Spinner from '../assets/images/loading.gif'

const Loading = () => {
	return (
		<div>
			<img src={Spinner} alt='loading' width='250px' height='250px' />
		</div>
	)
}

export default Loading
