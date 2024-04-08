import { useState } from "react"
import NoteContext from "./noteContext" 

const NoteState = (props)=>{
  const s1={
    "name":"Savan",
    "class":"10-a"
  }
  const [state, setState] = useState(s1)
  const update = () =>{
    setTimeout(() => {
      setState({
        "name":"Yamee",
        "class":"2-a"
      })
    }, 5000);
  }
  return(
    <NoteContext.Provider value={{state:state, update:update}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default  NoteState;
