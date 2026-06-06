import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          📋 Form Management System
        </Navbar.Brand>
        <Navbar.Text className="navbar-text-custom text-light ms-auto">
          Professional Data Management
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}
