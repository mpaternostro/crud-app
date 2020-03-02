import React from 'react';
import UserTable from './UserTable.js';
import ManageUser from './ManageUser.js';
// import AddUserForm from './AddUserForm.js';

function App() {
  const usersData = [
    { id: 1, name: 'Marce', username: 'marchu' },
    { id: 2, name: 'Charly', username: 'charlito16' },
    { id: 3, name: 'Ringo', username: 'ringolin.cito' },
  ];
  const [users, setUsers] = React.useState(usersData);
  const [userToEdit, setUserToEdit] = React.useState();

  function addUser(user) {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  function editUser(user) {
    setUserToEdit(user);
  }

  function deleteUser(userID) {
    const newUsers = users.filter(user => user.id !== userID)
    newUsers.forEach((user, i) => user.id = i + 1)
    setUsers(newUsers);
  }

  return (
    <div className="wrapper">
      <h1>CRUD App with Hooks</h1>
      <div className='flex-container'>
        <div className='user-management'>
          {/* <h2>Add user</h2>
          <AddUserForm
          addUser = {addUser}
          /> */}
          <ManageUser
          addUser = {addUser}
          userToEdit = {userToEdit}
          />
        </div>
        <div className='user-table'>
          <h2>View users</h2>
          <UserTable 
          users = {users}
          editUser = {editUser}
          deleteUser = {deleteUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
