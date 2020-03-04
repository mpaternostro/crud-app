import React from 'react';
import UserTable from './UserTable.js';
import AddUserForm from './AddUserForm.js';
import EditUserForm from './EditUserForm.js';

function App() {
  const usersData = [
    { id: 1, name: 'Marce', username: 'mpaternostro' },
    { id: 2, name: 'Charly', username: 'charlygarcia' },
    { id: 3, name: 'Ringo', username: 'ringostarr' },
  ];
  const [users, setUsers] = React.useState(usersData);
  const [editing, setEditing] = React.useState(false);
  const initialFormState = {id: null, name: '', username: ''};
  const [currentUser, setCurrentUser] = React.useState(initialFormState);

  function addUser(user) {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  function editUser(user) {
    setEditing(true);
    setCurrentUser(user);
  }

  function updateUser(updatedUser){
    const userID = updatedUser.id;
    setEditing(false);
    setUsers(users.map(user => user.id === userID ? updatedUser : user));
  }

  function deleteUser(userID) {
    const newUsers = users.filter(user => user.id !== userID)
    newUsers.forEach((user, i) => user.id = i + 1)
    setUsers(newUsers);
    setEditing(false);
  }

  return (
    <div className="wrapper">
      <h1>CRUD App with Hooks</h1>
      <div className='flex-container'>
        <div className='user-management'>
          {editing ? (
            <EditUserForm
            setEditing = {setEditing}
            updateUser = {updateUser}
            currentUser = {currentUser}
            />
          ) : (
            <AddUserForm
            addUser = {addUser}
            />
          )}
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
