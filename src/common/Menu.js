import React from 'react'
import './Menu.css'
import { Nav, NavItem } from 'react-bootstrap'

const Menu = ({ links }) => (
    <Nav bsStyle="pills" activeKey={1}>
        {links.map(button =>
            <NavItem eventKey={1} href={button.link}>
                {button.name}
            </NavItem>
        )}
    </Nav>
)

export default Menu;