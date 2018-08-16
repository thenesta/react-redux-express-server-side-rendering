import React, { Component } from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import HelloComponent from '../../component/main/HelloComponent.js'
import AboutComponent from '../../component/main/AboutComponent.js'
import BooksComponent from '../../component/main/BooksComponent.js'
// import route Components here
import {
  Route
} from 'react-router-dom';

class MainLayout extends Component {
  render() {
    return (
	  <div>
	    <Header/>
			<Route path="/home" component={HelloComponent}/>
			<Route path="/about" component={AboutComponent}/>
			<Route path="/book" component={BooksComponent}/>
		<Footer/>
      </div>
    );
  }
}

export default MainLayout;
