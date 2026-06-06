import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import UserForm from './UserForm'
import UserTable from './UserTable'

export default function HomePage() {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        <section className="form-table-section">
          <div className="form-table-container">
            <div className="form-wrapper">
              <UserForm />
            </div>
            <div className="table-wrapper">
              <UserTable />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
