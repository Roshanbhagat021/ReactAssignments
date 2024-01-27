 function Counter({count,setCount}){
    function inc(){
        setCount((n)=>n+1)
    }
    function dec(){
        setCount((n)=>n-1)
    }
    return(
        <><h1>Count:{count}</h1>
        <button onClick={inc}>Increase Count</button>
        <button  onClick={dec}>Decrease Count </button></>
    )
 }

 export default Counter;