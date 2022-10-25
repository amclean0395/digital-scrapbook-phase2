import React, { useState, useEffect} from 'react';
import './App.css';
import ConcertList from './ConcertList';
import ConcertForm from './ConcertForm';
import Home from './Home'
import Header from './Header'
import {Routes, Route} from "react-router-dom"


function App() {

  const [concerts, setConcerts] = useState([])
  const [searchBoxValue, setSearchBoxValue] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/concerts/')
    .then((r) => r.json())
    .then((oneConcert)=> setConcerts(oneConcert))
  }, [])

  const displayedConcerts = concerts.filter((oneConcert) => 
    oneConcert.date.toLowerCase().includes(searchBoxValue.toLowerCase())
  )
  //putting in name breaks it??????????

  function addConcert(newConcert){
    const updatedConcertArray = [...concerts, newConcert]
    setConcerts(updatedConcertArray)
  }

  function handleDelete(id) {
    const newConcertList = concerts.filter((oneConcert) => 
    oneConcert.id !== id)
    setConcerts(newConcertList)
  }

  return (
    <div className="appHeader">
        <Header />
        <Routes>
          <Route path="/ConcertForm" element={<ConcertForm addConcert={addConcert}/>}/>
          <Route path="/ConcertList" element={<ConcertList handleDelete={handleDelete}
          searchBoxValue={searchBoxValue} setSearchBoxValue={setSearchBoxValue} concerts={displayedConcerts}/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;