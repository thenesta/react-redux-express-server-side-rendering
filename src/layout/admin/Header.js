import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { formSubmit: state.InputHasErrored };
};

class Header extends Component {
  render() {
    return (
			  <div className="Header">
                <h1>AdminLayout Header</h1>
              </div>
    );
  }
}
const HeaderRedux = connect(mapStateToProps)(Header);

export default HeaderRedux;
