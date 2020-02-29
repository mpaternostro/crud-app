import React from 'react';

export function UserRow(props){
    return (
        <tr className='table-body'>
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td>
                <button id='edit-button' className='user-action-button'>Edit</button>
                <button id='delete-button' className='user-action-button'>Delete</button>
            </td>
        </tr>
    )
}
