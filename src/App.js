import "./App.css";

function App() {
  var items = ["item 1", "item 2", "item 3"];

  return (
    <div className="App">
      <h1>Flickr search</h1>
      <Search />
      <Results items={items} />
    </div>
  );
}

function Search() {
  return (
    <input id="search"></input>
  )
}

function Results(props) {
  const resultItems = props.items.map((x) => <li>{x}</li>  )
  return (
    <div id="results">
      <ul>
        {resultItems}
      </ul>
    </div>
  )
}

export default App;
