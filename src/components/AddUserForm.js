import React from 'react';

export default function AddUserForm(props){
    const initialFormState = { id: null, name: '', username:'' };
    const [user, setUser] = React.useState(initialFormState);
    
    function handleInputChange(event){
        const { name, value } = event.target;
        setUser({...user, [name]: value});
    }
    
    function handleSubmitForm(event){
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <h2>Add User</h2>
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
