import React, { Component } from 'react';
import Header from './Header';
import StudentSidebar from './StudentSidebar';


  
  class Student extends Component {
  
    
    render() {
  
      return (
        <div>
          <Header />
          <StudentSidebar />
        
        </div>
      );
    }
  }


export default Student;