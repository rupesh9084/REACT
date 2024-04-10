import React from 'react'

const Languages = () => {
    let arr=['java',"javascript","kotlin","c"]
  return (
    <div>
        <h1>best programming language</h1>
        <ol>
         {arr.map((iteam,index,array)=>(
         <li key={index}>{iteam}</li>
        ))}

        </ol>
    </div>
  )
}

export default Languages