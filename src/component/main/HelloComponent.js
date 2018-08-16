import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { formSubmit: state.InputHasErrored };
};

class HelloComponent extends Component {

  render() {
    return (
	  <div className="jumbotron">
                <h1 className="display-3">Hello, world!</h1>
              </div>
    );
  }
}

const HelloComponentRedux = connect(mapStateToProps)(HelloComponent);

export default HelloComponentRedux;
