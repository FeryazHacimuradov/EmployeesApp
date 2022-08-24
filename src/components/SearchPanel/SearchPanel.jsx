import React from 'react';
import './searchPanel.css';

const SearchPanel = ({setQuery}) => {
  
  return (
    <input type="text"
      className="form-control search-input w-full p-1 text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
      placeholder="Find an employee"
      onChange={e => setQuery(e.target.value)}/>
  )
}

export default SearchPanel;