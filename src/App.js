
import './App.css';
import {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';
import './index.css';
import AddEvents from './components/AddEvents';
function App() {

  const [showList, setShowList] = useState(true)
  const [events, setEvents] = useState([])

  const addEventFunc = (event) =>{
    setEvents((prevEvents)=>{
      return [...prevEvents , event]
    })
    setShowModal(false)
  }

  const [showModal, setShowModal] = useState(false)

  const handleClick = (id) =>{
    
    setEvents(events.filter((e)=>{
      return id!== e.id
    }))
    }
   
  const subtitle = "All the upcoming events are below"
  
  const handleClose = () =>{
    if(showModal==true) setShowModal(false)
    else setShowModal(true)
  }
  return (
    <div className='App'>
      
      <Title title="Events Reminder App" subtitle={subtitle}/>
      {showList && 
      <div>
        <button onClick={()=>{setShowList(false)}}>Hide All Events</button>
      </div>
      }
    
      { !showList && <div >
        <button onClick={()=>{setShowList(true)}}>Show Events</button>
      </div>
      }
      {showList && <EventList events={events} handleClick={handleClick}/>}
      <button onClick={handleClose}>Add New Event</button>
      { showModal && <Modal handleClose={handleClose} isBlack={false}>
          <AddEvents addEventFunc={addEventFunc}/>
      </Modal>}
    </div>
     
  );
}

export default App;
