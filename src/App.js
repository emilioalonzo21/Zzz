import { Login } from './Login';
import { Register } from './Register';
import React, { useState } from 'react';

function App() {
  const [currentForm, setCurrentForm] = useState('login')
  const onOffForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className='App'>
      {
        currentForm === "login" ? <Login offOnForm={onOffForm}/> : <Register offOnForm={onOffForm}/>
      }
    </div>
  )
}

//tenary checks if the login is true, if not goes to register

export default App;