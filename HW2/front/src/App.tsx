import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AllBooks, setItem } from './AllBooks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


/*
function App() {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState('');
  const [BooksList, setBooksList] = useState([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if(BooksList.length && !alert) {
      return;
    }    
    AllBooks()
      .then(items => {
        if(mounted.current) {
          setBooksList(items)
        }
      })
    return () => {
      mounted.current = false;
    };
  }, [alert, BooksList])

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        if(mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert])

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setItem(itemInput)
    .then(() => {
      if(mounted.current) {
        setItemInput('');
        setAlert(true);
      }
    })
  };

  return(
    <div className="wrapper">
     <h1>Books List</h1>
     <ul>
       {BooksList.map(item => <li key={item}>{item}</li>)}
     </ul>

     {alert && <h2> Submit Successful</h2>}
     
     <form>
       <label>
         <p>New Item</p>
         <input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} />
       </label>
       <button type="submit">Submit</button>
     </form>

   </div>
  )
}

export default App;
*/