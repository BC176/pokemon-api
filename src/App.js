import './App.css';
import React, { useState, useEffect } from 'react';

function App() {


  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
      .then(response => response.json())
      .then(response => setPeople(response.results))
  }, []);


  return (
    <div className="App">
      {people.length > 0 && people.map((person, index) => {
        return (<div key={index}>
          <ul style={{ marginLeft: 70 }}><li>{person.name}</li></ul></div>)
      })}
    </div>
  );
}

export default App;
