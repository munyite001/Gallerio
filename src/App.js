import React, { useState } from "react";
import Gallery from "./components/Gallery";
import Search from "./components/Search";


function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState(null)
  const [ data, setData ] = useState([])
  const [ apiURL, setAPIURL ] = useState(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=15`)

  return (
    <div className="App">
      <Search 
      setSearchTerm={setSearchTerm}
      />
      <Gallery 
      apiKey={API_KEY}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      searchTerm={searchTerm}
      setAPIURL={setAPIURL}
      setSearchTerm={setSearchTerm}
      apiURL={apiURL}
      data={data}
      setData={setData}
      />
    </div>
  );
}

export default App;
