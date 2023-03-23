
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <Person name={"Kazi Nazrul Islam"} nickname={"Dukhu Mia"} life={"1899-1976"} famousBook ={"Ognibina"} famousPoem={"Bidrohi"} honour={"National poet of Bangladesh"}></Person>
    </div>
  );
}

function Person(props){
  const [reached, setReached] = useState(1);
  const boostReached =()=>{
    const newReached = reached*2;
    setReached(newReached);
  }
  
  return(
    <div>
      <h2>Name: {props.name} </h2>
      <h4>Nickname: {props.nickname}</h4>
      <p>Lifetime Age: {props.life}</p>
      <p>Famous Book: {props.famousBook}</p>
      <p>Famous Poem: {props.famousPoem}</p>
      <p>Honour : {props.honour}</p>
      <h4>Reached: {reached}</h4>
      <button onClick={boostReached}>BOOST</button>

    </div>
    
  )
}

export default App;
