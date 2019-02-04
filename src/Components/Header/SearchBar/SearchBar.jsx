import React from 'react'

const SearchBar = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input name='search' placeholder='Search...'/> 
    </form>
  )
}

export default SearchBar
