import React, { useState } from 'react'

export default function UserForm() {
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    let form = e.target
    let fields = form.querySelectorAll(
      'input,select'
    )
    let errorNames = []
    fields.forEach((v, i) => {
      if (v.value == '') {
        errorNames.push(v.name)
      }
    });
    setErrors([...errorNames])
    // console.log(errorNames)
    if (errorNames.length == 0) {
      form.reset()
    }
  }

  const handleValidation = (e) => {

    if (e.target.value == '') {
      setErrors([...errors,e.target.name])
      
    } else {
      setErrors(
        errors.filter(
          item => item !== e.target.name
        )
      )
    }
  }

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="card-header">
          <h4 className="mb-0 fw-bold">➕ Add New User</h4>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: 'white' }}>First Name</label>
              <input
                type="text"
                name="full_name"
                className={
                  errors.includes('full_name')
                    ? "form-control border-danger"
                    : "form-control"
                }
                style={{ borderRadius: '8px', padding: '10px 15px', backgroundColor: '#2d3541', color: '#ffffff' }}
                placeholder="Enter first name"
                onKeyUp={handleValidation}
              />
              {errors.includes('full_name') && <small className="text-danger"> Name Required </small>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: 'white' }}>Last Name</label>
              <input
                type="text"
                name="last_name"
                className={
                  errors.includes('last_name')
                    ? "form-control border-danger"
                    : "form-control"
                }
                style={{ borderRadius: '8px', padding: '10px 15px', backgroundColor: '#2d3541', color: '#ffffff' }}
                placeholder="Enter last name"
                onKeyUp={handleValidation}
              />
              {errors.includes('last_name') && <small className="text-danger"> Last Required</small>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: 'white' }}>Email Address</label>
              <input
                type="email"
                name="email"
                className={
                  errors.includes('email')
                    ? "form-control border-danger"
                    : "form-control"
                }
                style={{ borderRadius: '8px', padding: '10px 15px', backgroundColor: '#2d3541', color: '#ffffff' }}
                placeholder="Enter email address"
                onKeyUp={handleValidation}

              />
              {errors.includes('email') && <small className="text-danger">Valid email required</small>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: 'white' }}>Phone Number</label>
              <input
                type="tel"
                name="Mobile_number"
                className={
                  errors.includes('Mobile_number')
                    ? "form-control border-danger"
                    : "form-control"
                }
                style={{ borderRadius: '8px', padding: '10px 15px', backgroundColor: '#2d3541', color: '#ffffff' }}
                placeholder="Enter phone number"
                onKeyUp={handleValidation}
              />
              {errors.includes('Mobile_number') && <small className="text-danger">Valid phone required</small>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: 'white' }}>Department</label>
              <select
                name="department"
                onChange={handleValidation}
                className={
                  errors.includes('department')
                    ? "form-control border-danger"
                    : "form-control"
                }
                style={{ borderRadius: '8px', padding: '10px 15px', backgroundColor: '#2d3541', color: '#ffffff' }}
              >
                <option value="">Select a department</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
              {errors.includes('department') && <small className="text-danger">Department required</small>}
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold" style={{ color: 'white' }}>Status</label>
              <select
                name="status"
                onChange={handleValidation}
                className={
                  errors.includes('status')
                    ? "form-control border-danger"
                    : "form-control"
                }
                style={{ borderRadius: '8px', padding: '10px 15px', backgroundColor: '#2d3541', color: '#ffffff' }}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              {errors.includes('status') && <small className="text-danger">status required</small>}
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-submit" type="submit" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', padding: '10px', color: 'white', fontWeight: 'bold', borderRadius: '8px' }}>
                ✓ Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
