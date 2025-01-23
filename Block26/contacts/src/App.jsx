import { useState } from 'react'
import './App.css'
import ContactList from './componets/ContactList'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <ContactList setSelectedContactId={setSelectedContactId}/>
    
       
    </>
  )
}

export default App
