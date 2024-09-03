
import React, { useState } from "react";

import './../styles/App.css';

 

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

 

const App = () => {

 

  const[data, setData] = useState(fruits)

  const[filteredData, setFilteredData] = useState(fruits)

  

 

  return (

    <div>

        <input onChange={(e) => {

          const arr = data.filter((item) => {

            return item.includes(e.target.value)

          })

          setFilteredData(arr)

        }} />

        <ul>

          {filteredData.map((item) => {

            return <li>{item}</li>

          })}

        </ul>

    </div>

  )

}

 

export default App