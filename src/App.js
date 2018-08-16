import React, { Component } from 'react';
import './App.css';
import AdminLayout from './layout/admin/AdminLayout';
import MainLayout from './layout/main/MainLayout';
// import route Components here
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

var layoutAssignments = {
  'admin': AdminLayout
}

var layoutPicker = function(props){
  console.log(props);
  var groupPath = props.location.pathname.split(/\//)[1];
  var Layout = layoutAssignments[groupPath];
  if(!Layout) Layout = MainLayout;//default layout is MainLayout
  return <Layout {...props}/>;//passing parent props to child props
};

class App extends Component {
  render() {
    return (
      <Route path="*" render={layoutPicker} />
    );
  }
}

export default App;
