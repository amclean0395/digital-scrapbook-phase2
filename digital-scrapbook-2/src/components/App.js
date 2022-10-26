import React, { useState, useEffect} from 'react';
import ConcertList from './ConcertList';
import ConcertForm from './ConcertForm';
import Home from './Home'
import Header from './Header'
import SetList from './SetList';
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
    oneConcert.set.song1.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song2.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song3.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song4.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song5.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song6.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song7.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song8.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song9.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song10.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song11.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song12.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song13.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song14.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song15.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song16.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song17.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song18.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song19.toLowerCase().includes(searchBoxValue.toLowerCase())
    || oneConcert.set.song20.toLowerCase().includes(searchBoxValue.toLowerCase())
  )

  function addConcert(newConcert){
    const updatedConcertArray = [...concerts, newConcert]
    setConcerts(updatedConcertArray)
  }

  return (
    <div className="appHeader">
        <Header />
        <Routes>
          <Route path="/ConcertForm" element={<ConcertForm addConcert={addConcert}/>}/>
          <Route path="/ConcertList" element={<ConcertList 
          searchBoxValue={searchBoxValue} setSearchBoxValue={setSearchBoxValue} concerts={displayedConcerts}
          concert={concerts} setConcerts={setConcerts}/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/ConcertList/:id" element={<SetList />}/>
        </Routes>
    </div>
  );
}

export default App;