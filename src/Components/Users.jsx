import React from 'react';
import { data } from 'react-router';

const Users = () => {

    const handleAddUser = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email= e.target.email.value;
        const newUser = {name, email};
        console.log(newUser);


        // Create user in the DB
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res =>res.json())
        .then(data => console.log('After creating DB', data))
    };

    return (
        <div>
            {/* Add user */}
            <div>
                <form onSubmit={handleAddUser}>
                    <input type="text" name='name'/>
                    <br />
                    <input type="email" name="email" id="" />
                    <br />
                    <input type="submit" value="Add user" />
                </form>
            </div>
        </div>
    );
};

export default Users;