// Import statements

const ToDo = (props) => {
    // Keeps track of the checked state of the to-do item
    
    // Changes the checked state of the to-do item
    
    return (
        <div style={{
            border: "2px solid black",
            borderRadius: 15,
            width: "30vw",
            margin: "10px auto",
            display: "flex",
            alignItems: "center"
        }}>
            {checked ?
                <IoCheckboxOutline size={30} style={{ "margin": "0px 10px" }} onClick={toggleChecked}/>
                : 
                <IoSquareOutline size={30} style={{ "margin": "0px 10px" }} onClick={toggleChecked}/>
            }
            <h2>{props.text}</h2>
        </div>
    );
}

export default ToDo;
