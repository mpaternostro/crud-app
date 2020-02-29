import React from 'react';
import {UserRow} from './UserRow.js';

export function UserTable(props) {
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
                        <UserRow key={user.id} name={user.name} username={user.username} />
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
