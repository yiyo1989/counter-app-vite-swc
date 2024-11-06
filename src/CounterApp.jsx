import { number } from "prop-types";
import { useState } from "react";



export const CounterApp = ({value}) =>
{

    const [counter, setCounter] = useState(value);

    const handleAdd =() => {
        //console.log(event);               
        setCounter(counter+1);
        //setCounter((c) => c+1);
       }

       const handleDeduct =() => {
        //console.log(event);               
        setCounter(counter-1);
       }

       const handleReset =() => {
        //console.log(event);                     
        setCounter(value);
       }
    
   
    return (
        <>
          <h1>CounterApp</h1>
          <h2> { counter } </h2>
          <button onClick={handleAdd}>
            counter +1
          </button>
          <button onClick={handleDeduct}>
            counter -1
          </button>
          <button onClick={handleReset}>
            Reset
          </button>
        </>
    )

};


CounterApp.propTypes ={
    value: number.isRequired
}