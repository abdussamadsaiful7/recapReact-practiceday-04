
import './App.css';

function App() {
  return (
    <div className="App">
     <Person name={"Kazi Nazrul Islam"} nickname={"Dukhu Mia"} life={"1899-1976"} famousBook ={"Ognibina"} famousPoem={"Bidrohi"} honour={"National poet of Bangladesh"}></Person>
    </div>
  );
}

function Person(props){
  
  return(
    <div>
      <h2>Name: {props.name} </h2>
      <h4>Nickname: {props.nickname}</h4>
      <p>Lifetime Age: {props.life}</p>
      <p>Famous Book: {props.famousBook}</p>
      <p>Famous Poem: {props.famousPoem}</p>
      <p>Honour : {props.honour}</p>

    </div>
    
  )
}

export default App;
