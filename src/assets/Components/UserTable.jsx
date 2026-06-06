import React from 'react'
import { Table } from 'react-bootstrap'

export default function UserTable() {
  const dummyUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '9999999999',
      country: 'United States',
      state: 'California'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '8888888888',
      country: 'Canada',
      state: 'Ontario'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.j@example.com',
      phone: '7777777777',
      country: 'Australia',
      state: 'New South Wales'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      phone: '6666666666',
      country: 'India',
      state: 'Maharashtra'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@example.com',
      phone: '5555555555',
      country: 'United Kingdom',
      state: 'England'
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '4444444444',
      country: 'Germany',
      state: 'Berlin'
    }
  ]

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
              <th>COUNTRY</th>
              <th>STATE</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.country}</td>
                <td>{user.state}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}
