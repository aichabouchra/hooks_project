import React, { useState } from 'react'

function State() {
    const [value, setValue] = useState(0) 
    const handleClick = () => setValue(prev => prev+1 )
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default State