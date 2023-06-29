import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import Search from "./components/Search";
import LightBox from "./components/LightBox";


function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState(null)
  const [ data, setData ] = useState([])
  const [ apiURL, setAPIURL ] = useState(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=15`)
  const [lightBox, setLightBox] = useState({
    img: null,
    display: false 
  })

  function downloadImage(imageURL) {
    fetch(imageURL)
    .then(res => res.blob())
    .then(file => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      link.download = new Date().getTime();
      link.click()
    }).catch(() => alert("Failed to download image"))
  }

  useEffect(() => {
    if (lightBox.display) {
      document.body.style.overflow="hidden";
    }
    else {
      document.body.style.overflow="auto";
    }
  })

  return (
    <div className="App">
      {lightBox.display && <LightBox lightBoxProps={lightBox} setLightBoxProps={setLightBox} downloadImg={downloadImage}/>}
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
      setLightBox={setLightBox}
      downloadImg={downloadImage}
      />
    </div>
  );
}

export default App;
