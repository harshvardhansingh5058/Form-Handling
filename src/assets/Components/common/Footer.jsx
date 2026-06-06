import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <Col md={4} className="footer-section mb-4 mb-md-0">
            <h5>ℹ️ About Us</h5>
            <p>A modern form management system designed for efficiency and ease of use. Built with cutting-edge web technologies.</p>
          </Col>
          <Col md={4} className="footer-section mb-4 mb-md-0">
            <h5>🔗 Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">📌 Home</a></li>
              <li><a href="#">❓ Help & Support</a></li>
              <li><a href="#">📧 Contact Us</a></li>
              <li><a href="#">📋 Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>📞 Contact Information</h5>
            <p>
              📧 <a href="mailto:info@formsystem.com">info@formsystem.com</a><br/>
              📱 +1 (555) 123-4567<br/>
              🌐 www.formsystem.com
            </p>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>© 2026 Form Management System. All rights reserved. | Designed with ❤️</p>
        </div>
      </Container>
    </footer>
  )
}
