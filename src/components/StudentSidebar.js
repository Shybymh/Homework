import { Button } from 'react-bootstrap';
import React from 'react';
import SidebarMenu,{ SidebarMenuBody, SidebarMenuHeader, SidebarMenuNavItem, SidebarMenuNavLink } from 'react-bootstrap-sidebar-menu';

function StudentSidebar() {
    return(
        <div id="sidebar">
            <SidebarMenu>
                <SidebarMenuHeader><h2>Subjects</h2></SidebarMenuHeader>
                <SidebarMenuBody>
                    <SidebarMenuNavItem><SidebarMenuNavLink>Subject1</SidebarMenuNavLink></SidebarMenuNavItem>
                    <br />
                    <SidebarMenuNavItem><SidebarMenuNavLink>Subject2</SidebarMenuNavLink></SidebarMenuNavItem>
                    <br />
                    <SidebarMenuNavItem><SidebarMenuNavLink>Subject3</SidebarMenuNavLink></SidebarMenuNavItem>
                    
                </SidebarMenuBody>
               
            </SidebarMenu>
        </div>
    )
}

  export default StudentSidebar;