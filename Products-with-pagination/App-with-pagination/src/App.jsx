import { useEffect, useState } from 'react'

import './App.css'
import Postitem from './components/Postitem'





async function getData(url){
  try {
    let data=await fetch(url);
    console.log("ok")
    let totalItems=Number(data.headers.get("X-Total-Count"));
    let totalPages=Math.ceil(totalItems/10)
    let parsedData= await data.json()

    return {parsedData:parsedData,totalPages:totalPages}

  } catch (error) {
    console.log(error)
  }
}



function App() {

  const [isLoding,setIsLoading]=useState(false)
  const [post,setPost]=useState([])
  const [errors,setErrors] = useState(null)
  const [page,setPage]=useState(1)
  const [pageCount,setPageCount]=useState(1)



  async function FetchandUpdateData(){
    setIsLoading(true)
    setErrors(null)
    try {
      // throw new Error("Hi this is a costume error")
      let {parsedData,totalPages} = await getData(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      setPost(parsedData)
      setPageCount(totalPages)
      setIsLoading(false)
      
    } catch (error) {
      setErrors(error.message)
      setIsLoading(false)
      
    }
  }


    useEffect(()=>{
      FetchandUpdateData()
      console.log(pageCount)
    },[page])

console.log(pageCount)
  return (
    <>
    {isLoding && <p>Loading....</p>}
    {errors && <p>Opps.. Something went wrong</p>}
    <div style={{display:"grid",gap:"40px", gridTemplateColumns:"repeat(2,1fr)"}}>
    <Postitem post={post} />
    </div>

    <div style={{display:'flex',marginTop:"50px",maxWidth:"80vw", justifyContent:"center",gap:"25px", marginInline:"auto"}}>
    {pageCount>1 && new Array(pageCount).fill(0).map((item,index)=>{
      return(
        <button style={{border:"2px solid black"}} onClick={()=>setPage(index+1)} key={index}>{index+1}</button>
      )
    })}
    </div>

     
    </>
  )
}

export default App
