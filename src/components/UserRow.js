import React from 'react';

export default function UserRow(props){
    return (
        <tr className='table-body'>
            <td>{props.user.name}</td>
            <td>{props.user.username}</td>
            <td>
                <button id='edit-button' className='user-action-button'
                onClick={() => props.editUser(props.user)}
                >Edit</button>
                <button id='delete-button' className='user-action-button'
                onClick={() => props.deleteUser(props.user.id)}
                >Delete</button>
            </td>
        </tr>
    )
}
