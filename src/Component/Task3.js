import React , {useState} from "react"

const Task3 = (props) =>{
    const[name,setName] = useState()
    const handleSubmit = (e) =>{
         e.preventDefault();
         props.getData(name)
    }
     return(
        <> 
          <form style={{justifyContent:'center' , display:'flex'}} onSubmit={handleSubmit}>
          <input  type="text" value={name} onChange={(e) =>{setName(e.target.value)}}/>
          <button>Submit</button> 
          </form>
        </>
     )
}
export default Task3