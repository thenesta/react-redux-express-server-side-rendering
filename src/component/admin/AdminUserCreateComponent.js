import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormSubmitData,InputCreateUserSubmit } from '../../js/actions/createuser';

const mapStateToProps = state => {
  return { formSubmit: state.InputHasErrored };
};

const mapDispatchToProps = (dispatch) => {
    return {
      //  formSubmitData: (url,data) => dispatch(FormSubmitData(url,data))
        inputCreateUserSubmit: (data) => dispatch(InputCreateUserSubmit(data))
    };
};

class AdminUserCreateComponent extends Component {
  constructor(props) {
    super(props);
	/*this.state ={
		displayErrors : false,
		formSubmit : {
			errors : {
				name : false,
				mobile : false
			}
		}
    }*/
	this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
      event.preventDefault();
	  if (!event.target.checkValidity()) {
		this.setState({ displayErrors: true });
		return;
	  }

	//this.props.formSubmitData('/api/form-submit-url',event);
  const { history } = this.props;
  this.props.inputCreateUserSubmit({url:'/api/form-submit-url',formEvent:event,history:history});
  console.log('submit');

  }

  render() {
    //const { formSubmit } = this.state;
    return (
	  <div className="jumbotron">
		<h1 className="display-3">Create User</h1>
		<form onSubmit={this.handleSubmit} >
			name : <input type="text" name="name" className={this.props.formSubmit.errors.name ? 'displayErrors' : ''}/><span className="text-error">{this.props.formSubmit.errors.name}</span>
			<br/><br/><button>Send Data</button>
        </form>

      </div>
    );
  }
}

const AdminUserCreateComponentRedux = connect(mapStateToProps,mapDispatchToProps)(AdminUserCreateComponent);

export default AdminUserCreateComponentRedux;
