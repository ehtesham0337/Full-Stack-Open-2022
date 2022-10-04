const Persons = ({ displayPeople, handleDelete }) => {


    return (
     <h4> {displayPeople.name} {displayPeople.number} 
        <button onClick={() => handleDelete(displayPeople.id, displayPeople.name)}> Delete </button>
     </h4>
    )
  }
  
  export default Persons