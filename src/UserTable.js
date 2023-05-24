import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/action';

const UserTable = ({ users, fetchUsers }) => {
    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);
  
    if (users.length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>User Table</h2>
        <table
                border="1px solid"
                style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

const mapStateToProps = (state) => {
  return {
    users: state.users,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
