import { useState } from "react"
import NoteContext from "./noteContext" 

const NoteState = (props)=>{
  const notesInitial=[
    {
      "_id": "6610e9f578696e6748112481",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title",
      "description": "My first note",
      "tag": "Personal",
      "date": "2024-04-06T06:21:41.259Z",
      "__v": 0
    },
    {
      "_id": "661392c0e9a21532f66301cb",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title2",
      "description": "My second note",
      "tag": "Personal",
      "date": "2024-04-08T06:46:24.128Z",
      "__v": 0
    },
    {
      "_id": "661392c0e9a21532f66301cb",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title2",
      "description": "My second note",
      "tag": "Personal",
      "date": "2024-04-08T06:46:24.128Z",
      "__v": 0
    },
    {
      "_id": "661392c0e9a21532f66301cb",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title2",
      "description": "My second note",
      "tag": "Personal",
      "date": "2024-04-08T06:46:24.128Z",
      "__v": 0
    },
    {
      "_id": "661392c0e9a21532f66301cb",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title2",
      "description": "My second note",
      "tag": "Personal",
      "date": "2024-04-08T06:46:24.128Z",
      "__v": 0
    },
    {
      "_id": "661392c0e9a21532f66301cb",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title2",
      "description": "My second note",
      "tag": "Personal",
      "date": "2024-04-08T06:46:24.128Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
  return(
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default  NoteState;
