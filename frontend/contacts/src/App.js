
import axios from 'axios'
import {useEffect,useState} from 'react'


function App() {
    const [people,setPerson] =useState(null)
  

  const addPerson= (person)=> {
    let people = this.state.people;

    people.push(person);

    
  }


  useEffect(async ()=>{
    const res = await axios.get("http://localhost:5000/").then((res)=>{
        setPerson(res.data.contact)
        console.log(res.data.contact)
    });
})
  

  
    return (
      <div>
        <h1>Address Book</h1>
       
      </div>
    )
  }

export default App