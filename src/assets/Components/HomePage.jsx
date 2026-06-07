import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import UserForm from './UserForm'
import UserTable from './UserTable'
import { useState } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState(() => {
    const storedUsers = localStorage.getItem("users");

    return storedUsers
      ? JSON.parse(storedUsers)
      : [];
  });
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        <section className="form-table-section">
          <div className="form-table-container">
            <div className="form-wrapper">
              <UserForm setFormData={setFormData} />
            </div>
            <div className="table-wrapper">
              <UserTable data={formData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
