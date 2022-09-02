import React from 'react'

const SearchFilter = ({filter, filterByName}) => {
  return (
    <div>
       Filter shown with : <input value={filter} onChange={filterByName} />
    </div>
  )
}

export default SearchFilter