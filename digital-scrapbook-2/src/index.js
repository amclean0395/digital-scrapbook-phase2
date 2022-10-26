import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// {
//   "concerts": [
//     {
//       "id": 1,
//       "name": "Dead & Company",
//       "date": "November 24th, 2015",
//       "location": "Broomfield, CO",
//       "Venue": "1st Bank Center",
//       "rating": "8.7",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list": {
//         "song1": "Cold Rain and Snow",
//         "song2": "New Speedway Boogie",
//         "song3": "Smokestack  Lightning",
//         "song4": "Me and My Uncle",
//         "song5": "Candyman",
//         "song6": "Bertha",
//         "song7": "Lost Sailor",
//         "song8": "Saint of Circumstance",
//         "song9": "Help on the Way",
//         "song10": "Slipknot!",
//         "song11": "Franklin's Tower",
//         "song12": "Estimated Prophet",
//         "song13": "Dark Star",
//         "song14": "Drums & Space",
//         "song15": "Black Peter",
//         "song16": "Good Lovin'",
//         "song17": "Touch of Grey"       
//       }
//     },
//     {
//       "id": 2,
//       "name": "Dead & Company",
//       "date": "July 2nd, 2016",
//       "location": "Boulder, CO",
//       "Venue": "Folsom Field",
//       "rating": "9.5",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "Bertha",
//         "song2": "Good Lovin'",
//         "song3": "Tennessee Jed",
//         "song4": "Cold Rain and Snow",
//         "song5": "Even So",
//         "song6": "Uncle John's Band",
//         "song7": "One More Saturday Night",
//         "song8": "Scarlet Begonias",
//         "song9": "Fire on the Mountain",
//         "song10": "Saint of Circumstance",
//         "song11": "Terrapin Station",
//         "song12": "Drums & Space",
//         "song13": "Stella Blue",
//         "song14": "Throwing Stones",
//         "song15": "Not Fade Away",
//         "song16": "Black Muddy River"     
//       }
//     },
//     {
//       "id": 3,
//       "name": "Dead & Company",
//       "date": "July 13th, 2018",
//       "location": "Boulder, CO",
//       "Venue": "Folsom Field",
//       "rating": "8.2",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "Iko Iko",
//         "song2": "Cold Rain and Snow",
//         "song3": "Black Throated Wind",
//         "song4": "Bertha",
//         "song5": "Greatest Story Ever Told",
//         "song6": "Comes a Time",
//         "song7": "Lost Sailor",
//         "song8": "Saint of Circumstance",
//         "song9": "Deal",
//         "song10": "The Weight",
//         "song11": "Terrapin Station",
//         "song12": "St. Stephen",
//         "song13": "William Tell Bridge",
//         "song14": "The Eleven",
//         "song15": "Drums & Space",
//         "song16": "All Along the Watchtower",
//         "song17": "Black Peter",
//         "song18": "Throwing Stones",
//         "song19": "Liberty",
//         "song20": "U.S. Blues"
//       }
//     },
//     {
//       "id": 4,
//       "name": "Dead & Company",
//       "date": "July 14th, 2018",
//       "location": "Boulder, CO",
//       "Venue": "Folsom Field",
//       "rating": "8.7",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "China Cat Sunflower",
//         "song2": "I Know You Rider",
//         "song3": "Shakedown Street",
//         "song4": "Brown Eyed Women",
//         "song5": "Althea",
//         "song6": "Cassidy",
//         "song7": "One More Saturday Night",
//         "song8": "Scarlet Begonias",
//         "song9": "Franklin's Tower",
//         "song10": "Fire on the Mountain",
//         "song11": "He's Gone",
//         "song12": "The Other One",
//         "song13": "Drums & Space",
//         "song14": "Days Between",
//         "song15": "Sugar Magnolia",
//         "song16": "Uncle John's Band",
//         "song17": "Ripple"       
//       }
//     },
//     {
//       "id": 5,
//       "name": "Dead & Company",
//       "date": "July 5th, 2019",
//       "location": "Boulder, CO",
//       "Venue": "Folsom Field",
//       "rating": "6.0",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "Not Fade Away",
//         "song2": "Cold Rain and Snow",
//         "song3": "Bertha",
//         "song4": "Me and My Uncle",
//         "song5": "Ramble on Rose",
//         "song6": "Mississippi Half-Step Uptown Toodeloo",
//         "song7": "Cassidy",
//         "song8": "Deal",
//         "song9": "Box of Rain",
//         "song10": "China Cat Sunflower",
//         "song11": "I know You Rider",
//         "song12": "Terrapin Station",
//         "song13": "Drums & Space",
//         "song14": "Casey Jones",
//         "song15": "The Other One",
//         "song16": "Morning Dew",
//         "song17": "The Weight",
//         "song18": "U.S. Blues" 
//       }
//     },
//     {
//       "id": 6,
//       "name": "Dead & Company",
//       "date": "August 20, 2021",
//       "location": "Queens, NY",
//       "Venue": "Citi Field",
//       "rating": "6.5",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "Good Times",
//         "song2": "Bertha",
//         "song3": "Good Lovin",
//         "song4": "Big Railroad Blues",
//         "song5": "Ramble on Rose",
//         "song6": "They Love Each Other",
//         "song7": "Cassidy",
//         "song8": "Casey Jones",
//         "song9": "Eyes of the World",
//         "song10": "Uncle John's Band",
//         "song11": "China Doll",
//         "song12": "China Cat Sunflower",
//         "song13": "I Know You Rider",
//         "song14": "Drums & Space",
//         "song15": "Spanish Jam",
//         "song16": "Althea",
//         "song17": "Stella Blue",
//         "song18": "U.S. Blues",
//         "song19": "The Weight"    
//       }
//     },
//     {
//       "id": 7,
//       "name": "Dead & Company",
//       "date": "August 28th, 2021",
//       "location": "Hershey, PA",
//       "Venue": "Hersheypark Stadium",
//       "rating": "8.1",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "The Music Never Stopped",
//         "song2": "Easy Answer",
//         "song3": "Touch of Grey",
//         "song4": "Tennessee Jed",
//         "song5": "Mr. Charlie",
//         "song6": "Black Throated Wind",
//         "song7": "Cassidy",
//         "song8": "Don't Ease Me In",
//         "song9": "Here Comes Sunshine",
//         "song10": "Estimated Prophet",
//         "song11": "Eyes of the World",
//         "song12": "Althea",
//         "song13": "Drums & Space",
//         "song14": "Milestones",
//         "song15": "Going Down the Road Feelin' Bad",
//         "song16": "Death Don't Have No Mercy",
//         "song17": "One More Sasturday Night",
//         "song18": "Quinn the Eskimo (The Mighty Quinn)"       
//       }
//     },
//     {
//       "id": 8,
//       "name": "Dead & Company",
//       "date": "October 22rd, 2021",
//       "location": "Greenwood Village, CO",
//       "Venue": "Fiddler's Green Amp",
//       "rating": "8.9",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "Good Times",
//         "song2": "Feel Like a Stranger",
//         "song3": "Alabama Getaway",
//         "song4": "Me and My Uncle",
//         "song5": "It Hurts Me Too",
//         "song6": "Ramble On Rose",
//         "song7": "If I Had the World to Give",
//         "song8": "Deal",
//         "song9": "Sugaree",
//         "song10": "China Cat Sunflower",
//         "song11": "I know You Rider",
//         "song12": "Dark Star",
//         "song13": "The Other One",
//         "song14": "Drums & Space",
//         "song15": "Wharf Rat",
//         "song16": "Sugar Magnolia",
//         "song17": "The Weight"       
//       }
//     },
//     {
//       "id": 9,
//       "name": "Dead & Company",
//       "date": "October 23rd, 2021",
//       "location": "Greenwood Village, CO",
//       "Venue": "Fiddler's Green Amp",
//       "rating": "9.0",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "Iko Iko",
//         "song2": "Shakedown Street",
//         "song3": "Ship of Fools ",
//         "song4": "Brown Eyed Women",
//         "song5": "Crazy Fingers",
//         "song6": "Here Comes Sunshine",
//         "song7": "Going Down the Road Feelin' Bad",
//         "song8": "Truckin'",
//         "song9": "Viola Lee Blues",
//         "song10": "Help on the Way",
//         "song11": "Slipknot!",
//         "song12": "Franklin's Tower",
//         "song13": "Drums & Space",
//         "song14": "Cumberland Blues",
//         "song15": "Stella Blue",
//         "song16": "One More Saturday Night",
//         "song17": "Brokedown Palace"        
//       }
//     },
//     {
//       "id": 10,
//       "name": "Dead & Company",
//       "date": "June 17th, 2016",
//       "location": "Boulder, CO",
//       "Venue": "Folsom Field",
//       "rating": "8.9",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "Bertha",
//         "song2": "Good Lovin'",
//         "song3": "New Speedway Boogie",
//         "song4": "Smokestack Lightning",
//         "song5": "Mr. Charlie",
//         "song6": "Ramble On Rose",
//         "song7": "They Love Each Other",
//         "song8": "High Time",
//         "song9": "Let It Grow",
//         "song10": "Sugaree",
//         "song11": "Truckin'",
//         "song12": "Viola Lee Blues",
//         "song13": "Althea",
//         "song14": "The Other One",
//         "song15": "Drums & Space",
//         "song16": "Wharf Rat",
//         "song17": "Turn On Your Love Light",
//         "song18": "Casey Jones"
//       }
//     },
//     {
//       "id": 11,
//       "name": "Dead & Company",
//       "date": "June 18th, 2022",
//       "location": "Boulder, CO",
//       "Venue": "Folsom Field",
//       "rating": "9.3",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "China Cat Sunflower",
//         "song2": "I Know You Rider",
//         "song3": "He's Gone",
//         "song4": "Brown Eyed Women",
//         "song5": "Foolish Heart",
//         "song6": "It Hurts Me Too",
//         "song7": "Lost Sailor",
//         "song8": "Saint of Circumstance",
//         "song9": "Dear Mr. Fantasy",
//         "song10": "Hey Jude",
//         "song11": "Help on the Way",
//         "song12": "Slipknot!",
//         "song13": "Franklin's Tower",
//         "song14": "Drums & Space",
//         "song15": "Milestones",
//         "song16": "All Along the Watchtower",
//         "song17": "Going Down the Road Feelin' Bad", 
//         "song18": "Morning Dew",
//         "song19": "Terrapin Station",
//         "song20": "One More Saturday Night"
//       }
//     },
//     {
    //   "id": 12,
    //   "name": "Joe Russo's Almost Dead",
    //   "date": "June 18th, 2021",
    //   "location": "Baltimore, MD",
    //   "Venue": "MECU Pavilion",
    //   "rating": "8.3",
    //   "picture": {
    //     "poster": "",
    //     "liveImage": ""
    //   },
    //   "set-list":  {
    //     "song1": "Alligator",
    //     "song2": "St. Stephen",
    //     "song3": "The Wheel",
    //     "song4": "Row Jimmy",
    //     "song5": "Good Lovin'",
    //     "song6": "The Music Never Stopped",
    //     "song7": "Help on the Way",
    //     "song8": "Slipknot!",
    //     "song9": "Feel Like a Stranger",
    //     "song10": "Peggy-O",
    //     "song11": "Franklin's Tower",
    //     "song12": "Touch of Grey",
    //     "song13": "Tonight I'll Be Staying Here With You"
    //   }
    // },
//     {
//       "id": 13,
//       "name": "Joe Russo's Almost Dead",
//       "date": "June 3rd, 2022",
//       "location": "Morrison, CO",
//       "Venue": "Red Rocks Amphitheatre",
//       "rating": "9.3",
//       "picture": {
//         "poster": "",
//         "liveImage": ""
//       },
//       "set-list":  {
//         "song1": "Jack Straw",
//         "song2": "Althea",
//         "song3": "My Brother Esau",
//         "song4": "Help on the Way",
//         "song5": "Slipknot!",
//         "song6": "I've Seen a Face",
//         "song7": "Cumberland Blues",
//         "song8": "China Cat Sunflower",
//         "song9": "Brown Eyed Women",
//         "song10": "The Music Never Stopped",
//         "song11": "I'm Your Captain (Closer to Home)",
//         "song12": "Morning Dew",
//         "song13": "Shakedown Street",
//         "song14": "Weather Report Suite",
//         "song15": "Let It Grow",
//         "song16": "Shine On You Crazy Diamond (Parts I-V)",
//         "song17": "Sage and Spirit", 
//         "song18": "Samson and Delilah"
//       }
//     }
//   ]
// }