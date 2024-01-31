import { useState } from 'react'
import './App.css'
import DataDisplay from "./components/DataDisplay"

function App() {
  const [data,setData]=useState([]);
  const [isLoding,setIsLoading]=useState(false)
  const [errors,setErrors]=useState(null)



  async function fetchData (){
    setIsLoading(true)
    setErrors(null)
    try {
      // throw new Error("opps .. Something went wrong...")
      let res= await fetch('https://jsonplaceholder.typicode.com/posts')
      let finalRes= await res.json()
      setData(finalRes)
      setIsLoading(false)
      
    } catch (error) {
      console.log(error.message)
      setErrors(error.message)
      setIsLoading(false)
      
    }
  }

  return (
    <>
    <button onClick={fetchData}>Fetch the Data</button>
    {isLoding && <h4>Loading...</h4>}
    
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)" ,gap:"10px" ,margin:"20px"}}>
    <DataDisplay data={data}/>
    </div>
    {errors && <p>{errors}</p>}


      
    </>
  )
}

export default App
