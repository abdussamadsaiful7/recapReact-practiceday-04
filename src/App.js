
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
    <Todos></Todos>
     <Person name={"Kazi Nazrul Islam"} nickname={"Dukhu Mia"} life={"1899-1976"} famousBook ={"Ognibina"} famousPoem={"Bidrohi"} honour={"National poet of Bangladesh"}></Person>
    </div>
  );
}

const TodoStyle ={
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '10px',
  margin: '20px',
 
}

const gridStyle ={
  backgroundColor: 'lightPink',
  borderRadius: '10px',
  boxShadow: '2px 2px 2px gray',
  padding: '10px',
  
}

function Todos (){
  const [Todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>{setTodos(data)
          console.log(data)
    })
  },[])

  return(
    <div>
      <h1> Welcome to Todos Website</h1>
      <h5>Total Todos list: {Todos.length}</h5>
     <div style={TodoStyle}>
        {
           Todos.map(todo =><Todo title ={todo.title} completed ={todo.completed} id={todo.id} userId={todo.userId} ></Todo>)
         }
     </div>
    </div>
  )

}

function Todo(props){
  return(
   
     <div style={gridStyle}>
      <h4>Title: {props.title}</h4>
        <p>Completed: {props.completed}</p>
        <p>UserId: {props.userId}, ID: {props.id}</p>
     </div>
    
  )
}



const personStyle ={
  backgroundColor:'lightGreen',
  border: '2px solid red',
  margin: '24px',
  padding:'20px',
}

function Person(props){
  const [reached, setReached] = useState(1);
  const boostReached =()=>{
    const newReached = reached*2;
    setReached(newReached);
  }
  
  return(
    <div style={personStyle}>
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
