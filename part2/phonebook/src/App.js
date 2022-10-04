import { useEffect, useState } from 'react'
import Persons from './Components/Persons.js'
import NewPersonForm from './Components/NewPersonForm.js'
import SearchFilter from './Components/SearchFilter.js'
import phoneService from './Services/phoneService.js'
import Notification from './Components/Notification.js'


const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showPerson, setShowPerson] = useState(persons)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    phoneService.getAll()
    .then(initialPersons => setPersons(initialPersons))
        
  }, [])

  const addName = (event) => {
    event.preventDefault()
    
    const nameObject = {
      name : newName,
      number : newNumber,
      //id : persons.length + 1
    }

    const currentName = persons.filter(cName => cName.name === newName)
    if(currentName.length === 0){
      phoneService.create(nameObject)
      .then(addPerson => {
        setPersons(persons.concat(addPerson)) //Add to main persons object
        setShowPerson(persons.concat(addPerson))
        setErrorMessage(`Added ${nameObject.name} to phonebook`)
        
      } )
      .catch((error) => setErrorMessage(error.response.data.error));
    }

    else {
      if (
        window.confirm(
          `${nameObject.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        phoneService
          .update(currentName[0].id, nameObject)
          .then((returnedPerson) => {
            const updatedPersons = persons.map((person) =>
              person.id !== returnedPerson.id ? person : returnedPerson
            );
            setPersons(updatedPersons);
            setShowPerson(updatedPersons);
            setErrorMessage(`Updated ${nameObject.name}'s number`)
          })
           .catch((error) => setErrorMessage(error.response.data.error))
      }
    }
  setNewName('')
  setNewNumber('')
  }

  
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phoneService.deletePerson(id).then(() => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
        setShowPerson(updatedPersons);
        setErrorMessage(`Removed ${name} from phonebook`);
      }
    )
    }
    // if (window.confirm(`Delete ${name}`) == true ) {
    //   phoneService.deletePerson(id)
    // }
    // else return 
    
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
      <Notification message = {errorMessage} />
      <SearchFilter filter={filter}  filterByName={filterByName}/>
        
      <h1>Add Someone New</h1> {/* Display add person form */}

      <NewPersonForm addName={addName} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h1> Numbers</h1> 
      <div>
          {showPerson.map(ppl => <Persons key={ppl.id} displayPeople = {ppl} handleDelete = {handleDelete} />)}
        </div>
    </div>
  )
}

export default App