// TODO: what do we need to import here?

function App() {
  // TODO: what kinds of state variables should we track?
  
  // TODO: what methods should go here?

  return (
    <div className="App">
      <div className="input">
        <input placeholder="What's on your mind?" value={input} onChange={/*TODO: what method goes here?*/}/>
        <button onClick={/*TODO: what method goes here?*/}>
          + Add
        </button>
      </div>

      <div className="toDos">
        {/*TODO: we need to display all the to-do items here in one line.*/}
      </div>
    </div>
  );
}

export default App;
