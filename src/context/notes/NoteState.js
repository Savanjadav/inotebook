import { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props) => {
  const notesInitial = [
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
      "_id": "661392c0e9a21532f366301cb",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title2",
      "description": "My second note",
      "tag": "Personal",
      "date": "2024-04-08T06:46:24.128Z",
      "__v": 0
    },
    {
      "_id": "661392c0e9a21532f663012cb",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title2",
      "description": "My second note",
      "tag": "Personal",
      "date": "2024-04-08T06:46:24.128Z",
      "__v": 0
    },
    {
      "_id": "661392c0e9a21532f66301cb2",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title2",
      "description": "My second note",
      "tag": "Personal",
      "date": "2024-04-08T06:46:24.128Z",
      "__v": 0
    },
    {
      "_id": "661392c0e9a21532f66301cb1",
      "user": "660fe3cb0fe1648acb4b5927",
      "title": "My title2",
      "description": "My second note",
      "tag": "Personal",
      "date": "2024-04-08T06:46:24.128Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new note")
    const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = () => {

  }
  // Edit a Note
  const editNote = () => {

  }
  return (
    <NoteContext.Provider value={{notes, addNote,deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
