function App() {
  //We will be adding in state variables here

  //We will be adding in methods here

  return (
    <div className="App">
      <div className="input">
        <input placeholder="What's on your mind?" value={input} onChange={updateInput}/>
        <button onClick={addToDo}>
          + Add
        </button>
      </div>

      <div className="toDos">
        {/*Figure out how to display the items*/}
      </div>
    </div>
  );
}

export default App;
