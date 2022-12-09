

import { Login } from './Login';
import { Register } from './Register';
import { Inventory } from './Inventory';
import React, { useEffect, useState } from 'react';
import { Router } from 'express';



function App() {
  //this controls the form displays, so itll show which form.
  const [expressData, setExpressData] = useState([{}])
  const [currentForm, setCurrentForm] = useState('login')
  const onOffForm = (formName) => {
    setCurrentForm(formName);
  }
  //useEffect is mostly used for fetchs! i think
  useEffect(() => {
    fetch('/inventory').then(
      response => response.json()
    ).then(
      data => {
        setExpressData(data)
      }
    )
    //pass in an empty array because it will only run on the first render
  }, [])

  return (
    <Router>
      <switch>
        <div className='App'>
          <h1>Food n Stuff Inventory System</h1>
          {
            currentForm === "login" ? <Login offOnForm={onOffForm} /> : <Register offOnForm={onOffForm} />
          }
        </div>
      </switch>
    </Router >
  )
}


//tenary checks if the login is true, if not goes to register

export default App;