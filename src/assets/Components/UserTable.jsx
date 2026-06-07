import React from 'react'
import { Table } from 'react-bootstrap'

export default function UserTable({ data = [] }) {
  return (
    <div className="users-table-wrapper">
      <div className="table-responsive-wrapper">
        <Table className="users-table">
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>MOBILE NUMBER</th>
              <th>DEPARTMENT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td className="td-name">
                    {user.full_name} {user.last_name}
                  </td>

                  <td className="td-email">{user.email}</td>

                  <td className="td-phone f-weight">{user.Mobile_number}</td>

                  <td>
                    <span className={`dept-badge dept-${user.department}`}>
                      {user.department}
                    </span>
                  </td>

                  <td>
                    <span className={`status-badge status-${user.status}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  <div className="no-data-icon">📭</div>
                  <div className="no-data-text">No Users Added Yet</div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  )
}