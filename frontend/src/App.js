import {useState} from 'react';
import React from 'react'
import axios from "axios";
import './App.css'
function App() {

//for api and the first 2 inputs
  const [card, setCard] = useState(
    {
        email: '',
        typeVaccine: '',
        status: '',
        dosage: ''
    }
  )

  const [status, setStatus] = useState('Yes')
  const [dosage, setDosage] = useState('First')
  


  function handleChange(e) {
    e.preventDefault();
    const {name, value} = e.target;
    setCard(prevInput => {
      return(
        {
          ...prevInput,
          [name]: value
        }
      )
    })
  }


  function addCard(e) {
    //e.preventDefault();
    document.getElementById("message").innerHTML = `Card has been added! This is one step to insure that you and everyone else stays safe!`;
    const newCard = {
      email: card.email,
      typeVaccine: card.typeVaccine,
      status: status,
      dosage: dosage
    }

    axios.post('/add', newCard);
  }



  return (
    <div className="App">
      <h1>Add Card</h1>
      <form>
          <label htmlFor="email">Email</label>
        <input onChange={handleChange} name="email" value={card.email} type="email"></input>
        <br />
        <label htmlFor="status">What type of vaccine did you get?</label>
        <input onChange={handleChange} name="typeVaccine" value={card.typeVaccine}></input>
        <br />
        <label htmlFor="status">Did you get the vaccine?</label>
        <select value={status} onChange={(e) => {setStatus(e.target.value)}} name='status'>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <label htmlFor="dosage">What does did you get (if it is your first, you will make an another card)</label>
        <select value={dosage} onChange={(e) => {setDosage(e.target.value)}} name='dosage'>
          <option value="First">First dose</option>
          <option value="Second">Second dose</option>
        </select>
        <br />
        <center><button onClick={addCard} class="button1">Add card</button></center>
      </form>
        <p id="message"></p>
        <br />
        <h3>Firefox is not supported</h3>
        <p>You may be able to view this website in Firefox but our servers are not supported with Firefox try installing chrome to use the website version or use the app (coming soon)</p>
    </div>
  );
}


export default App;