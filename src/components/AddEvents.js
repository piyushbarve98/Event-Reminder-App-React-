import './AddEvents.css'
import React from 'react'
import {useState} from 'react' 
export default function AddEvents({addEventFunc}) {
  const [title,setTitle] = useState('')
  const [date,setDate] = useState('')
  const [location,setLocation] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('')
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    const event = {
      title : title,
      date : date,
      location : location,
      id : Math.floor(Math.random() * 1000)
    }
    addEventFunc(event)
    resetForm();
    
  }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
            <span>Event Title: </span>
            <input type="text" onChange = {(e)=>setTitle(e.target.value) } value={title}/>
        </label>
        <label>
            <span>Event Date: </span>
            <input type="date" onChange = {(e)=>setDate(e.target.value) } value={date}/>
        </label>
        <label>
            <span>Event Location: </span>
            <input type="text" onChange = {(e)=>setLocation(e.target.value) } value={location}/>
        </label>
        <button>Submit</button>
        {/* <p onClick={resetForm} style={{cursor:'pointer'}}>Reset Form</p> */}
        

        
    </form>
    
  )
}
