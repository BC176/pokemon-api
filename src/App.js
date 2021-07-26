import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {


  const [people, setPeople] = useState([]);

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=200')
    //   .then(response => response.json())
    //   .then(response => setPeople(response.results))
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=200')
      .then(response => { setPeople(response.data.results) })
  }, []);

  return (
    <div className="App">
      {people.length > 0 && people.map((person, index) => {
        console.log(index)
        return (<div key={index}>
          <ul style={{ marginLeft: 110 }}><li>{person.name}</li></ul></div>)
      })}
    </div>
  );
}

export default App;
