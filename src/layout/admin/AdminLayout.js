import React, { Component } from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import AdminHomeComponent from '../../component/admin/AdminHomeComponent.js'
import AdminUserComponent from '../../component/admin/AdminUserComponent.js'
import AdminUserCreateComponent from '../../component/admin/AdminUserCreateComponent.js'
// import route Components here
import {
  Route
} from 'react-router-dom';

class AdminLayout extends Component {
  constructor(props) {
    super(props);
	//console.log(this.props.match.url);
	//const parsed = queryString.parse(this.props.location.search);
	//console.log(parsed);
	console.log("ENV = "+process.env.REACT_APP_TEST);
  }

  render() {
    return (
	  <div>
	    <Header/>
			<Route exact path='/admin' component={AdminHomeComponent} />
		    <Route exact path='/admin/user' component={AdminUserComponent} />
			<Route exact path='/admin/user/create' component={AdminUserCreateComponent} />
		<Footer/>
      </div>
    );
  }
}

export default AdminLayout;
