import React from 'react'
import {render} from 'react-dom'

import App from "./components/App"
import ThanksComponent from "./components/ThanksComponent.jsx"



import {Router,Route,IndexRoute,browserHistory} from 'react-router'

import {Provider} from 'react-redux'
import store,{history} from './store'
const router = (
	<Provider store={store} >
	<Router history={history}>
		<Route path="/">
		 <IndexRoute component={App}></IndexRoute>
		</Route>
		<Route path="/thanks" component={ThanksComponent}>
		</Route>
	</Router>
	</Provider>
)

render(router,document.getElementById('app'));