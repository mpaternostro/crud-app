import React from 'react';
import UserRow from './UserRow.js';

export default function UserTable(props) {
    return (
        <table>
            <thead>
                <tr className='table-heading'>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <UserRow
                        key={user.id} user={user}
                        editUser={props.editUser} deleteUser={props.deleteUser}
                        />
                    ))
                ) : (
                    <tr>
                        <td>No users</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
