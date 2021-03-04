import "./App.css";
import React, { useEffect, useState } from "react";
import { flickrSearch } from "./flickr.js";

function App() {
    const [searchString, setSearchString] = useState("");
    const [photoUrls, setPhotoUrls] = useState([]);

    useEffect(() => {
        setPhotoUrls(flickrSearch(searchString, 2));
    }, [searchString]);

    return (
        <div className="App">
            <h1>Flickr search</h1>
            <Search setSearchString={setSearchString} />
            <Results items={photoUrls} />
        </div>
    );
}

function Search(props) {
    return (
        <input onChange={(e) => props.setSearchString(e.target.value)}></input>
    );
}

function Results(props) {
    const resultItems = props.items.map((x, index) => (
        <img alt="Flickr" src={x} key={index} />
    ));
    return <div id="results">{resultItems}</div>;
}

export default App;
