import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

import App from './components/App'
import NotFound from './components/NotFound'

export default class Root extends Component {
    render() {
        return (
            <div>
            	<Router history={browserHistory}>
            	    <Route path="/" component={App} >
            	        <Route path="*" component={NotFound}/>
            	    </Route>
            	</Router>
            </div>
        )	
    }
}
