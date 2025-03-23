import { useState } from "react"

export default function Counter(){
    const counterStyle ={
        border:"2px solid green",
        padding:"10px",
        borderRadius:"10px"
    }

    const [count,setCount] = useState(0);

    const handleAdd = ()=>{
        const newCount = count + 1;
        setCount(newCount)
    }
  
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}