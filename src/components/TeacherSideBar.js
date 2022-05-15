import { Button } from 'react-bootstrap';
import React from 'react';
import SidebarMenu,{ SidebarMenuBody, SidebarMenuHeader, SidebarMenuNavItem, SidebarMenuNavLink } from 'react-bootstrap-sidebar-menu';

function TeacherSidebar() {
    return(
        <div id="sidebar">
            <SidebarMenu>
                <SidebarMenuHeader><h2>Students</h2></SidebarMenuHeader>
                <SidebarMenuBody>
                    <SidebarMenuNavItem><SidebarMenuNavLink>Student1</SidebarMenuNavLink></SidebarMenuNavItem>
                    <br />
                    <SidebarMenuNavItem><SidebarMenuNavLink>Student2</SidebarMenuNavLink></SidebarMenuNavItem>
                    <br />
                    <SidebarMenuNavItem><SidebarMenuNavLink>Student3</SidebarMenuNavLink></SidebarMenuNavItem>
                    <Button className='mt-4'>Add Student</Button>
                </SidebarMenuBody>
               
            </SidebarMenu>
        </div>
    )
}

  export default TeacherSidebar;