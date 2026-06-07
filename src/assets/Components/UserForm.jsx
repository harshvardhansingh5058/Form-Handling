import React, { useState } from 'react'

export default function UserForm({ setFormData }) {
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

    if (errorNames.length == 0) {
      const formValues = new FormData(e.target);
      const userObj = Object.fromEntries(formValues);
      setFormData((prev) => {
        const update = [...prev, userObj]
        localStorage.setItem(
          "users",
          JSON.stringify(update)
        )
        // console.log(update) //  data...
        return update;
      });
      form.reset();
    }

  }

  const handleValidation = (e) => {

    if (e.target.name === "Mobile_number") {
      e.target.value = e.target.value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    if (e.target.value == '') {
      setErrors([...errors, e.target.name])
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
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="full_name"
                className={
                  errors.includes('full_name')
                    ? "form-control border-danger"
                    : "form-control"
                }
                placeholder="Enter first name"
                onKeyUp={handleValidation}
              />
              {errors.includes('full_name') && <small className="text-danger">Name Required</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="last_name"
                className={
                  errors.includes('last_name')
                    ? "form-control border-danger"
                    : "form-control"
                }
                placeholder="Enter last name"
                onKeyUp={handleValidation}
              />
              {errors.includes('last_name') && <small className="text-danger">Last name Required</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className={
                  errors.includes('email')
                    ? "form-control border-danger"
                    : "form-control"
                }
                placeholder="Enter email address"
                onKeyUp={handleValidation}
              />
              {errors.includes('email') && <small className="text-danger">Valid email required</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="Mobile_number"
                className={
                  errors.includes('Mobile_number')
                    ? "form-control border-danger"
                    : "form-control"
                }
                placeholder="Enter phone number"
                onKeyUp={handleValidation}
              />
              {errors.includes('Mobile_number') && <small className="text-danger">Valid phone required</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Department</label>
              <select
                name="department"
                onChange={handleValidation}
                className={
                  errors.includes('department')
                    ? "form-control border-danger"
                    : "form-control"
                }
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
              <label className="form-label">Status</label>
              <select
                name="status"
                onChange={handleValidation}
                className={
                  errors.includes('status')
                    ? "form-control border-danger"
                    : "form-control"
                }
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              {errors.includes('status') && <small className="text-danger">Status required</small>}
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-submit" type="submit">
                ✓ Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}