import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';

function App() {
  const [submitButton,setSubmitButton] = useState(true);

const [formValues, setFormValues] = useState({
    name: '',
    email: ''
  });


let submitButtonDisabled = true;


const handleInputSet = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));

    console.log(formValues.name);
    if (formValues.name != "" && formValues.email != "")
  {
    submitButtonDisabled = false;
  }
  }

 const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission logic here
  }

  return (
    <form onSubmit={handleFormSubmit} >
      <label>NAME</label>
      <input type="text" id="name" name="name" value={formValues.name} onChange={handleInputSet}/>

      <label>EMAIL</label>
      <input type="text" id="email" name="email" value={formValues.email} onChange={handleInputSet}/>
      <button type="submit" disabled={(formValues.name && formValues.email)?false:true} >Submit</button>


    </form>
  );
  
}

export default App;
