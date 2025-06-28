import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Movies from "./component/Movies";
import WatchList from "./component/WatchList";
import Banner from "./component/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist from local storage on component mount
//   useEffect(() => {
//     const storedWatchlist = localStorage.getItem("moviesApp");
//     if (storedWatchlist) {
//       setWatchlist(JSON.parse(storedWatchlist));
//       console.log("Loaded from localStorage:", JSON.parse(storedWatchlist));
//     }
//   }, []);

//   const handleAddtoWatchlist = (movieObj) => {
//   const isDuplicate = watchlist.some((movie) => movie.id === movieObj.id);
//   if (!isDuplicate) {
//     let newWatchList = [...watchlist, movieObj];
//     localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
//     setWatchlist(newWatchList);
//     console.log(newWatchList);
//   } else {
//     console.log("Movie is already in the watchlist");
//   }
// };


useEffect(() => {
  console.log("Watchlist changed:", watchlist);
}, [watchlist]);

const handleAddtoWatchlist = (movie) => {
  if (watchlist.find(m => m.id === movie.id)) {
    console.log("Movie is already in the watchlist");
    return;
  }
  const updated = [...watchlist, movie];
  console.log("Adding movie:", movie.title);
  setWatchlist(updated);
  localStorage.setItem("moviesApp", JSON.stringify(updated));
};

const handleRemoveFromWatchlist = (movie) => {
  const filtered = watchlist.filter(m => m.id !== movie.id);
  console.log("Removing movie:", movie.title, filtered);
  setWatchlist(filtered);
  localStorage.setItem("moviesApp", JSON.stringify(filtered));
};



  
//   const handleRemoveFromWatchlist = (movieObj) => {
//     const filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
//     localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
//     setWatchlist(filteredWatchlist);
//     console.log("Removed from watchlist:", filteredWatchlist);
//   };

   
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlist ={handleRemoveFromWatchlist } />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
