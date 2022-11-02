import React, { useState, useEffect} from 'react';
import ConcertList from './ConcertList';
import ConcertForm from './ConcertForm';
// import Home from './Home'
import Header from './Header'
import SetList from './SetList';
import {Routes, Route} from "react-router-dom"
import Media from './Media';
import About from './About';


function App() {

  const [concerts, setConcerts] = useState([])
  const [searchBoxValue, setSearchBoxValue] = useState('')
  
  useEffect(() => {
    fetch('http://localhost:3001/concerts/')
    .then((r) => r.json())
    .then((oneConcert)=> setConcerts(oneConcert))
  }, [])

  function addConcert(newConcert){
    const updatedConcertArray = [...concerts, newConcert]
    setConcerts(updatedConcertArray)
  }


  // const [concerts2, setConcerts2] = useState([])
  // const [searchBoxValue2, setSearchBoxValue2] = useState('')

  // useEffect(() => {
  //   fetch('http://localhost:3001/concerts/')
  //   .then((r) => r.json())
  //   .then((oneConcert)=> setConcerts2(oneConcert))
  // }, [])

  // function addConcert2(newConcert){
  //   const updatedConcertArray2 = [...concerts2, newConcert]
  //   setConcerts2(updatedConcertArray2)
  // }


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

  // const displayedConcerts2 = concerts2.filter((oneConcert) => 
  //   oneConcert.name.toLowerCase().includes(searchBoxValue2.toLowerCase())
  //   || oneConcert.date.toLowerCase().includes(searchBoxValue2.toLowerCase())
  //   || oneConcert.location.toLowerCase().includes(searchBoxValue2.toLowerCase())
  //   || oneConcert.venue.toLowerCase().includes(searchBoxValue2.toLowerCase())
  // )

 

  return (
    <div className="appHeader">
        <Header />
        <br></br>
        <Routes>

          <Route path="/ConcertForm" element={
          <ConcertForm 
            addConcert={addConcert}
            // addConcert2={addConcert2}
          />
          }
          />

          <Route path="/ConcertList" element={
          <ConcertList 
            concerts={displayedConcerts}
            searchBoxValue={searchBoxValue} 
            setSearchBoxValue={setSearchBoxValue} 
            setConcerts={setConcerts}
          />
          }
          />

          {/* <Route path="/List" element={
          <Home 
            displayedConcerts2={displayedConcerts2} 
            setSearchBoxValue2={setSearchBoxValue2} 
            searchBoxValue2={searchBoxValue2}
            setConcerts2={setConcerts2}
          />
          } 
          /> */}

          <Route path="/ConcertList/:id" element={<SetList/>}/>

          <Route path="/" element={<About />}/>

          <Route path="/Media" element={<Media />}/>
        </Routes>
    </div>
  );
}

export default App;