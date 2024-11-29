import { useState } from "react";

function Hooks(){
    const[count , setCount] = useState(0);

    const handleIncrease=()=>{
        setCount(count+1);
    }
    const handleDecrease=()=>{
        setCount(count-1);
        }
    const handleReset = () =>{
        setCount(0);
    }

    return <>
        <h1>Counter</h1>
        <h1>{count}</h1>

        <button onClick={handleIncrease}>Increase</button>
        <button disabled={count==0} onClick={handleDecrease}>Decrease</button>
        <button disabled={count==0} onClick={handleReset}>Reset</button>
    </>
}
export default Hooks;