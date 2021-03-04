import "./App.css";
import React, { useEffect, useState } from "react";
import { flickrSearch } from "./flickr.js";

function App() {
    const [searchString, setSearchString] = useState("");
    var items = ["item 1", "item 2", "item 3"];

    useEffect(() => {
        flickrSearch(searchString);
    });

    return (
        <div className="App">
            <h1>Flickr search</h1>
            <Search setSearchString={setSearchString} />
            <Results items={items} />
        </div>
    );
}

function Search(props) {
    return (
        <input onChange={(e) => props.setSearchString(e.target.value)}></input>
    );
}

function Results(props) {
    const resultItems = props.items.map((x, index) => <li key={index}>{x}</li>);
    return (
        <div id="results">
            <ul>{resultItems}</ul>
        </div>
    );
}

export default App;
