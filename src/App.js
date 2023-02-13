// Import statements

function App() {
  // Stores all the to-do items
  
  // Stores the user input
  
  // Initializes random to-dos on load

  // Updates the user input value
  
  // Adds a new to-do list item

  return (
    <div className="App">
      <div className="input">
        <input placeholder="What's on your mind?" value={input} onChange={updateInput}/>
        <button onClick={addToDo}>
          + Add
        </button>
      </div>

      <div className="toDos">
        {toDo.map(t => <ToDo text={t} key={Math.random()}/>)}
      </div>
    </div>
  );
}

export default App;
