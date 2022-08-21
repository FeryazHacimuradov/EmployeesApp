import React, { useEffect } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import './searchPanel.css';

const SearchPanel = () => {

  const { query, setQuery } = useStateContext();

  useEffect(() => {
    console.log(query);
  }, [query])

  return (
    <input 
      type="text"
      className="form-control search-input w-full p-1 text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
      placeholder="Find an employee"
      onChange={e => setQuery(e.target.value)}
      />
  )
}

export default SearchPanel;