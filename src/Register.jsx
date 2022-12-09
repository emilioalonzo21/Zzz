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
                <input value={name} autoComplete='off' name="name" id="name" placeholder="full name" required/>
                <label htmlFor="email">Email</label>
                <input type="email" autoComplete='off' placeholder="youremail@mail.com" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" autoComplete='off' placeholder="******" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => props.offOnForm('login')}>Already registered? Login here!</button>
        </div>
    )
}