import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
/////---- routes----////
import App from './App.js'
import MainPage from './mainpage/mainpage.js'
import Rainfall from './rainfall/rainfall.js'

const Routing = ({ store }) => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/home" component={MainPage}/>
        <Route path="/rainfall" component={Rainfall}/>
      </Switch>
    </div>
  </BrowserRouter>
)

Routing.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routing

// class Routing extends Component {
//   render(){
//     return(
//       <BrowserRouter>
//         <div>
//           <Route exact path="/" component={App}/>
//           <Route path="/home" component={MainPage}/>
//           <Route path="/rainfall" component={Rainfall}/>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }
//
//
// export default Routing
