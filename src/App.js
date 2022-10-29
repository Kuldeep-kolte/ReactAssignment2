import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setname] = useState("");
  const [dept, setdept] = useState("");
  const [rating, setrating] = useState("");
  const [list, setList] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, dept, rating)
    const data = { name, dept, rating }
    if (name && dept && rating) {
      setList((ls) => [...ls, data])

    }
  }
  return (
    <div className="App">
      <h1 className='title'>Employee feedback form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} required />
        </label> <br />
        <label>Department :
          <input type="text" name="dept" value={dept} onChange={(e) => setdept(e.target.value)} required/>
        </label> <br />
        <label> Rating:
          <input type="text" name="rating" value={rating} onChange={(e) => setrating(e.target.value)} req/>
        </label><br /> <br />
        <button className="btn btn-warning">Submit</button>
      </form>

      <div className='mainbox container'>
        {
          list.map((a) =>
            <span className='container box1'>
              <span><span>Name: </span>{a.name} | <span>Department: </span>{a.dept} | <span>Rating: </span>{a.rating}</span>
            </span>

          )

        }    </div>
    </div>
  );
}

export default App;
