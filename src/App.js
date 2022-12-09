import { Login } from './Login';
import { Register } from './Register';
import React, { useState } from 'react';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       checkBoxes: [],
//       favoritesCheckBoxes: [],
//       defaultList: [],
//       favoritesList: [],
//       message: ''
//     }
//   }

function App() {
  //this controls the form displays, so itll show which form.
  const [currentForm, setCurrentForm] = useState('login')
  const onOffForm = (formName) => {
    setCurrentForm(formName);
  }
  return (

    <div className='App'>
      <h1>Store Inventory System</h1>
      {
        currentForm === "login" ? <Login offOnForm={onOffForm} /> : <Register offOnForm={onOffForm} />
      }
    </div>
  )
}


//tenary checks if the login is true, if not goes to register

export default App;