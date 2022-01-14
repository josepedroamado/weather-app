import React, { useState, useContext } from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../contexts/UserContext'

function WeatherAppNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { setLoggedIn } = useContext(UserContext)
  let navigate = useNavigate() 
  
  const logout = () => {
    setLoggedIn(false)
    navigate("/login")
  }

  return  <>
            <Navbar color="dark" dark expand="md" className="shadow">
                <NavbarBrand><strong>Weather-App</strong></NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/app/search" tag={Link}>Search</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/app/history" tag={Link}>History</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={logout}>Sign out</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
          </>
}

export default WeatherAppNavbar