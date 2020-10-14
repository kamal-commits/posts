import React from 'react'
import Posts from './components/Posts'
import { Box } from '@material-ui/core'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SinglePost from './components/SinglePost'

function App() {
	return (
		<Box>
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route path='/' exact component={Posts} />
						<Route path='/:id' exact component={SinglePost} />
					</Switch>
				</BrowserRouter>
			</Provider>
		</Box>
	)
}

export default App
