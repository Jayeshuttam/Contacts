import React, { useState, useEffect } from 'react';
import axios from 'axios';
const HomePage = () => {
  const [data, setData] = useState(null)
  const [list ,setList] =useState(null)
  
    
  const handleClick= async()=>
  {
    
    const res = await axios.get("http://localhost:5000/").then((res)=>{
        setData(res.data)
        console.log(res.data)
    });
      console.log("clicked")
//     fetch('/', 
//     {method:'get',
    
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },})
//     .then((response)=>response).then(data=>setData({data}))
//   };
showlist()

}
const showlist=()=>{
    
        
    
}


  return(
    <div>
    <h1>Home Page</h1>
    <button onClick={handleClick} value="Show Contacts">Show Contacts</button>)
    </div>
    
    )
}


export default HomePage;