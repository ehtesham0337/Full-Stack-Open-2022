

const NewPersonForm = ({addName, newName, handlePersonChange , newNumber, handleNumberChange}) => {
return(
<form onSubmit={addName}>
<div>
 Name : <input value={newName} onChange={handlePersonChange}/>
</div>
<br/>
<div>
 Number : <input value={newNumber} onChange={handleNumberChange}/>
</div>

<div>
  <button type="submit">Add</button>
</div>
</form>
)
}

export default NewPersonForm