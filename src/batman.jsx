import { useState } from "react"

export default function Batsman(){
    const counterStyle ={
        border:"2px solid green",
        padding:"10px",
        borderRadius:"10px",
        marginBottom:"10px",
    }
    const [count,setSingle] = useState(0)
    const [four,setFour]= useState(0)
    const [six,setSixes]= useState(0)
    const SingleRuns =()=>{
         const newSingle = count + 1;
        setSingle(newSingle)
    }
    const fours=()=>{
         const newFours = count + 4;
         setSingle(newFours)
         const allFour = four +1
         setFour(allFour)
        
    }
    const sixes=()=>{
         const newSixes = count + 6;
         setSingle(newSixes)
         const allSixes = six + 1
         setSixes(allSixes)
        
    }

    return(
        <div style={counterStyle}>
            {
                count >= 50 && <p>Congratulations You are fifty</p>
            }
            <p>Total Fours:{four}</p>
            <p>Total Six:{six}</p>
            <h3>score:{count}</h3>
            <button onClick={SingleRuns}>Single</button>
            <button onClick={fours}>Four</button>
            <button onClick={sixes}>Six</button>
        </div>
    )
}