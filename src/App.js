import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const fruit = ['Banana', 'Apple']
  const names = ['James Bond', 'Tom Cruise', 'Iron Man', 'Spider Man']
  return (
    <div className="App">
      <MovieCount></MovieCount>
     <Id name="Elon Mask"></Id>
     <Id name={names[0]}></Id>
     <Id name={names[1]}></Id>
     <Id name={names[2]}></Id>
     <Id name={names[3]}></Id>
      <header className="App-header">
      
       <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Id(props) {
  const nameStyle = {
    border : "2px solid blue",
    margin: "20px"

  }
  return (
    <div style = {nameStyle}>
      <h2>Mr. {props.name}</h2>
      <h5 style={{color: 'tomato'}}>They are always legend</h5>
    </div>
  )
}

function MovieCount() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => setCount(count + 1);
  return (
    <div>
       <h3>Number Of Movie -  {count}</h3>
       <MovieDisplay movies={count}></MovieDisplay>
       <MovieDisplay movies={count +2}></MovieDisplay>
       <MovieDisplay movies={count - 1}></MovieDisplay>
       <MovieDisplay movies={count + 29}></MovieDisplay>
      <button onClick={handleClick}> Add Movie: </button>
     
    </div>
  )
}
function MovieDisplay(props) {
  return (
    <h3>Movie I'm Wacthed - {props.movies}</h3>
  )
}
export default App;
