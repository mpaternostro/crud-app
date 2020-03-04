import React from 'react';

export default function EditUserForm(props){
    const [user, setUser] = React.useState(props.currentUser);

    React.useEffect(() => {
        setUser(props.currentUser);
    }, [props.currentUser])

    function handleInputChange(event){
        const { name, value } = event.target;
        setUser({...user, [name]: value});
    }

    function handleSubmitForm(event){
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user);
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
            <button>Update user</button>
            <button onClick={() => props.setEditing(false) }>Cancel</button>
        </form>
    )
}
