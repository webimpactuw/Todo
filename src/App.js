// TODO: what do we need to import here?

function App() {
  // TODO: what kinds of state variables should we track?
  
  // TODO: what methods should go here?

  return (
    <div className="App">
      <div className="input">
        <input placeholder="What's on your mind?" value={input} onChange={updateInput}/>
        <button onClick={addToDo}>
          + Add
        </button>
      </div>

      <div className="toDos">
        {/*We need to display all the to-do items here in one line.*/}
      </div>
    </div>
  );
}

export default App;
