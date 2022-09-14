import { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './Components/Persons.js'
import NewPersonForm from './Components/NewPersonForm.js'
import SearchFilter from './Components/SearchFilter.js'

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showPerson, setShowPerson] = useState(persons)

  //Repeated Name Check Function
  // function areObjectsEqual(first, second){
  //   const firstObject = Object.getOwnPropertyNames(first)
  //   const secondObject = Object.getOwnPropertyNames(second)
    
  //   if(firstObject.length !== secondObject.length) return false
    
  //   const hasAllKeys = firstObject.every(value => !!secondObject.find(v => v === value))

  //   if(!hasAllKeys) return false

  //   for (const key of firstObject){
  //     if(first[key] !== second[key]) return false;
  //   }

  //   return true
  // }

  useEffect(() => {
    axios
        .get('http://localhost:3001/persons')
        .then(response => setPersons(response.data))
  }, [])

  const addName = (event) => {
    event.preventDefault()
    
    
    const nameObject = {
      name : newName,
      number : newNumber,
      id : persons.length + 1
    }

    const currentName = persons.filter(cName => cName.name === newName)

    if(currentName.length === 1){
      alert(`${newName} is already added to the phonebook`)
    }
    else{
    setPersons(persons.concat(nameObject)) //Add to main persons object
    setShowPerson(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    console.log("Added", newName + newNumber)
   
  }
    // const noteObject = {
    //   id : notes.length + 1,
    //   content : newNote,
    //   date : new Date().toISOString,
    //   important : Math.random() < 0.5
    //}

    // setNotes(notes.concat(noteObject))
    // setNewNote('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const filterByName = (event) => {
    const search = event.target.value
    setFilter(search)
    setShowPerson(persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())))
  }


  return (
    <div>
   
      <h1>Phonebook</h1> {/* Display Search Filter*/} 
      <SearchFilter filter={filter}  filterByName={filterByName}/>
        
      <h1>Add Someone New</h1> {/* Display add person form */}

      <NewPersonForm addName={addName} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      {/* <form onSubmit={addName}>
          <div>
           Name : <input value={newName} onChange={handleNoteChange}/>
          </div>
          
          <div>
            <button type="submit">Add</button>
          </div>
      </form> */}


      <h1> Numbers</h1> {/* Display All Persons*/} 
      <div>
          {showPerson.map(ppl => <Persons key={ppl.id} displayPeople = {ppl}/>)}
        </div>
    </div>
  )
}

export default App