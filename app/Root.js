import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

// import { store } from './redux/store';

// import App from './components/App'
// import NotFound from './components/NotFound'
// import List from './components/List'

// export default class Root extends Component {
//     render() {
//         return (
//             <div>
//                 <Provider store={store}>
//             	   <Router history={browserHistory}>
//             	       <Route path="/" component={App} >
//                             < IndexRoute component={List} />
//             	           <Route path="*" component={NotFound}/>
//             	       </Route>
//             	   </Router>
//                 </Provider>
//             </div>
//         )	
//     }
// }

export default class Root extends Component {
    render() {
        return  (
            <div>hello world!</div>
        )
    }
}
