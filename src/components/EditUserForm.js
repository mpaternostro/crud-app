import React from 'react';

export default function EditUserForm(props){
    // const initialFormState = { id: props.user.id, name: props.user.name, username: props.user.username };
    // const [user, setUser] = React.useState(initialFormState);
    const [user, setUser] = React.useState(props.user);

    function handleInputChange(event){
        const { name, value } = event.target;
        setUser({...user, [name]: value});
    }

    function handleSubmitForm(event){
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.editUser(user);
        setUser(initialFormState);
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <h2>Edit User</h2>
            <h3>
                <label htmlFor='name'>Name</label><br/>
                <input id='name' type='text' name='name' value={user.name}
                onChange={handleInputChange}/>
            </h3>
            <h3>
                <label htmlFor='username'>Username</label><br/>
                <input id='username' type='text' name='username' value={user.username}
                onChange={handleInputChange}/>
            </h3>
            <button>Add New User</button>
        </form>
    )
}
