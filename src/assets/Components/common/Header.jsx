import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand">
          📋 Form Management System
        </Navbar.Brand>
        <Navbar.Text className="navbar-text-custom ms-auto">
          Professional Data Management
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}