import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './TeacherSideBar';
import { Login } from './LoginComponent';
import Student from './StudentComponent';
import Teacher from './TeacherComponent';


  
  class Main extends Component {
  
    
    render() {
      return (
        <div>
           <Teacher />
          
        </div>
      );
    }
  }


export default Main;