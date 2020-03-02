import React from 'react';
import AddUserForm from './AddUserForm.js';
import EditUserForm from './EditUserForm.js';

export default function ManageUser(props){
    // const formState = props.userFormState.toString();
    return (
        props.userToEdit ? (
            <EditUserForm
            user = {props.userToEdit}
            />
        ) : (
            <AddUserForm
            addUser = {props.addUser}
            />
        )
    )
}
