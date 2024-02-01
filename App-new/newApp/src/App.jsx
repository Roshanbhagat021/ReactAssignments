import { useState } from 'react'
import Timer from './components/Timer'

import './App.css'

function App() {
  const [showComponent , setShowComponent ] = useState(true)

  return (
    <>
     {showComponent && <Timer/>}
     <button onClick={()=>setShowComponent(!showComponent)}>Toggele Timer</button>
    </>
  )
}

export default App
