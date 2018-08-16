import React, { Component } from 'react';

class AdminUserComponent extends Component {
  constructor(props) {
    super(props);
	this.state ={
		users : []
    }
  }
  UNSAFE_componentWillMount() {
    //console.log(process.env.REACT_APP_EXPRESS_URL);
    //fetch(process.env.REACT_APP_EXPRESS_URL+'/users')
	fetch('/api/users')
	  .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          users: json
        })
      });
  }
  render() {
    return (
	  <div className="jumbotron">
                <h1 className="display-3">List Users</h1>
				{
				    this.state.users.length != 0 ?
					   this.state.users.map(function(user) {
						   return <li key={user.id}>{user.name}</li>
						})
					:
					   <li>Empty Users</li>
				}

              </div>
    );
  }
}

export default AdminUserComponent;
