// import React from "react";
// import HomeCard from "./HomeCard";
// import Search2 from "./Search2";

// function Home({setConcerts2, displayedConcerts2, setSearchBoxValue2, searchBoxValue2}){
    

//     function handleDelete2(id) {
//         const newConcertList = displayedConcerts2.filter((oneConcert) => 
//         oneConcert.id !== id)
//         setConcerts2(newConcertList)
//       }


//     const homeCard = displayedConcerts2.map((oneConcert) => (
//         <HomeCard 
//             key = {oneConcert.id}
//             id = {oneConcert.id}
//             name = {oneConcert.name}
//             date = {oneConcert.date}
//             location = {oneConcert.location}
//             venue = {oneConcert.venue}
//             set = {oneConcert.set}
//             handleDelete2={handleDelete2}
//         />
//     ))

//     return (
//         <div>
//         <div>
//             <Search2 searchBoxValue2={searchBoxValue2} setSearchBoxValue2={setSearchBoxValue2}/>
//         </div>
//         <div id="home">
//             <br></br>
//             <table className="table">
//                 <tbody>
//                     <tr>
//                     <th>
//                         <h3 className="uiHeader">Name</h3>
//                     </th>
//                     <th>
//                         <h3 className="uiHeader">Date</h3>
//                     </th>
//                     <th>
//                         <h3 className="uiHeader">Location</h3>
//                     </th>
//                     <th>
//                         <h3 className="uiHeader">Venue</h3>
//                     </th>
//                     <th>
//                         <button className="deleteButtons">X</button>
//                     </th>
//                     </tr>
//                     {homeCard}
//                 </tbody>
//             </table>
//         </div>
//         </div>
//     )
// }

// export default Home

