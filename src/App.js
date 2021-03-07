import "./App.css";
import React, { useEffect, useState } from "react";
import { getPhotoUrls } from "./api.js";

function App() {
    const [searchString, setSearchString] = useState("");
    const [photoUrls, setPhotoUrls] = useState([]);

    useEffect(() => {
        getPhotoUrls(searchString, 3, 0).then((result) => setPhotoUrls(result));
    }, [searchString]);

    return (
        <div className="App">
            <h1>Flickr search</h1>
            <Search setSearchString={setSearchString} />
            <Results photoUrls={photoUrls} />
        </div>
    );
}

function Search(props) {
    return (
        <input onChange={(e) => props.setSearchString(e.target.value)}></input>
    );
}

function Results(props) {
    if (props.photoUrls != null) {
        const resultItems = props.photoUrls.map((x, index) => (
            <img className="image" alt="Flickr" src={x} key={index} />
        ));
        return <div id="results">{resultItems}</div>;
    } else {
        return <div id="results"></div>;
    }
}

export default App;
