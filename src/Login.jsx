import React, { useState, useEffect } from 'react'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (eve) => {
        eve.preventDefault();
        console.log(email);
    }

    useEffect(() => {
        setErrorMessage('');
    }, [email, password])

    return (
        //htmlFor is used for labels to link them with their inputs, while using the input id
        <div className='mainForms'>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" autoComplete='off' placeholder="averyrandomemail@email.com" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" autoComplete='off' placeholder="******" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => props.offOnForm('register')}>Not registered yet? Register here!</button>
        </div>
    )
}