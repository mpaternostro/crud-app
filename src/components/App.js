import React from 'react';
import {UserTable} from './UserTable.js';

function App() {
  const usersData = [
    { id: 1, name: 'Marce', username: 'marchu' },
    { id: 2, name: 'Charly', username: 'charlito16' },
    { id: 3, name: 'Ringo', username: 'ringolin.cito' },
  ];
  const [users, setUsers] = React.useState(usersData);

  return (
    <div className="wrapper">
      <h1>CRUD App with Hooks</h1>
      <div className='flex-container'>
        <div className='user-management'>
          <h2>Add user</h2>
        </div>
        <div className='user-table'>
          <h2>View users</h2>
          <UserTable 
          users = {users}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
