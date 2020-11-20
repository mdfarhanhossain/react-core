import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const Products =[
    {name:'photoshop',price:'$40.00'},
    {name:'illustrator',price:'$30.00'}
  ]

  const productNames = Products.map(product =>product.name);
  console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CountIncrace></CountIncrace>
        <Users></Users>
        <p> This is my first react app</p>
        <Product product ={Products[0]}></Product>
        <Product product={Products[1]}></Product>
       
        <Person></Person>
        <Person></Person>
        
       
      </header>
    </div>
  );
  }
  function Users(){
    const [users, setUser] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
    },[])
    return(
      <div>
        <h3>User Component  {users.length}</h3>
        <ul>
           {
             users.map(user => <li>{user.name}</li>)
           }
        </ul>
      </div>
    )
  }
  function CountIncrace (){
    const [count , setCount] = useState(10);
    const handleIncrace = () => setCount(count +1);
  
    return (
      <div>
        <h1>count :{count}</h1>
        <button onClick ={()=>setCount(count-1)}>decrace</button>
        <button onClick ={()=>setCount(count+1)}>incrace</button>
      </div>
    )
  }



  function Product (props){
    const styleProduct = {
      border:'4px solid blue',
      backgroundColor:'lightgray',
      borderRadius:'15px',
      height: '250px',
      width: '300px',
      float:'left',
      color:'black',
      margin:'10px'
    }
    return (
      <div style ={styleProduct}>
        <h2 >Name:  {props.product.name}</h2>
        <h5></h5>
        <h1>Price-  {props.product.price}</h1>
        <button>Buy Now</button>

      </div>
    )
  }
function Person(){
    const PersonStyle = {
      border:'2px solid orange',
      margin:'10px',
      padding:'10px'
    }
  return (
          <div style={PersonStyle}>
             <h1>Name: Sakib Al Hassan</h1>
             <h5>It is very larg</h5>
            
          </div>
  ) 
}


export default App;
