import React from 'react'
import styles from "./EventList.module.css"
export default function EventList({events, handleClick}) {
  return (
    <div>
        {events.map((e)=>(
        <div key={e.id} className={styles.card}>
          <h3 style={{fontSize: "22px"}}>{e.title}</h3>
          <p>{e.location} - {e.date}</p>
          
          <button onClick={()=>{ handleClick(e.id)}}>Delete</button>
        </div>
      ))}
        
        
    </div>
        
  )
}
