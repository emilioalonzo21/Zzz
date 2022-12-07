import React, { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (eve) => {
        eve.preventDefault();
        console.log(email);
    }

    //every form needs some type of handlesubmit! Remember to wrap it up.


    return (
        <div className='mainForms'>
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name Plz</label>
                <input value={name} name="name" id="name" placeholder="full name"/>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="youremail@mail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="******" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => props.offOnForm('login')}>Already registered? Login here!</button>
        </div>
    )
}