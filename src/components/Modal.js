import React from 'react'
import ReactDOM  from 'react-dom'
import './Modal.css'
export default function Modal({children,  isBlack}) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
        <div className='modal' style={{
          textAlign: "center",
          border: "2px solid",
          borderColor:  isBlack ? "black" : "green"
          
          }}>
            {children}
           
        </div>


    </div>
  ), document.body)
}



