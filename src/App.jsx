
import './App.css'
import Counter from './counter'
import Batsman from './batman'
import Posts from './posts'
import { Suspense } from 'react'

const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())

function App() {

// const poster = posting()
function handleClick(){
  alert("Python Clicked")
}
const handleClick3 = () =>{
  alert("C Language Clicked")
}
// function sumButtonNumber(num){
//   const sum = num + 5;
//   alert(sum)
// }
const sumButtonNumber= (num)=>{
  const sum = num + 5
  alert(sum)
}


  return (
    <>




    <Suspense fallback={<p>⌛Post Is Loading....</p>}>
      <Posts fetchPosts={fetchPosts}></Posts>
    </Suspense>
    <Batsman></Batsman>
    <Counter></Counter>
    
    
    <h1>Vite + React</h1>
      <button onClick={handleClick}>Python</button>
      <button onClick={function handleClick2(){
        alert("Java Clicked")
      }}>Java</button>
      <button onClick={handleClick3}>C Language</button>
      <button onClick={()=>{
        alert("Javascript Clicked")
      }}>Javascript</button>
      <button onClick={()=>sumButtonNumber(15)}>Sum Number</button>

    </>
  )
}

export default App
