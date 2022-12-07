import React, { useState } from 'react'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (eve) => {
        eve.preventDefault();
        console.log(email);
    }
    return (
        //htmlFor is used for labels to link them with their inputs, while using the input id
        <div className='mainForms'>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="averyrandomemail@email.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="******" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => props.offOnForm('register')}>Not registered yet? Register here!</button>
        </div>
    )
}