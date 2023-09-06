import { useState } from "react";
import "./App.css";
function ReactApp() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [isChecked, setisChecked] = useState(false)

  const deleteIcon = (id) => {
    console.log({id});
    setData((data)=>{
      return  data.filter((elem,i)=>{
        return i !== id;
      })
    });
  };
  return (
    <div className="main-div">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="input"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          className="btn"
          type="submit"
          onClick={() => {
            const newData = [...data, input];
            setData(newData);
            setInput("");
            console.log(newData);
          }}
        >
          Submit
        </button>
      </form>
      <input id="checkbox" type="checkbox" onChange={()=>{setisChecked(!isChecked)}} checked={isChecked}/>
      <label htmlFor="checkbox">List</label>
      <hr />

      {isChecked ? (
        <ol>
          { data.length > 0 && data.map((elem,id) => {
          return ( <li key={id}>
              <span>{elem}</span>
              <span className="delete" onClick={() => deleteIcon(id)}>
                ❌
              </span>
            </li>
          );
        })}
        </ol>
      ) : (
        <div className="card-wrap">
         { data.length > 0 && data.map((elem,id) => {
          return ( <div className="card" key={id}>
              <span>{elem}</span>
              <span className="delete" onClick={() => deleteIcon(id)}>
                ❌
              </span>
            </div>
          );
        })}
        </div>
      )}
    </div>
  );
}

export default ReactApp;

// data.filter(elem => elem.id !== id)
