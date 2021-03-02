import "./App.css";
import React, { useState } from "react";

function App() {
  const [searchString, setSearchString] = useState("");
  var items = ["item 1", "item 2", "item 3"];

  return (
    <div className="App">
      <h1>Flickr search</h1>
      <Search setSearchString={setSearchString} />
      search: {searchString}
      <Results items={items} />
    </div>
  );
}

function Search(props) {
  return (
    <input
      id="search"
      onChange={(e) => props.setSearchString(e.target.value)}
    ></input>
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
