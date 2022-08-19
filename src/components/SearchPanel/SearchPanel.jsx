import React from 'react';
import './searchPanel.css';

const SearchPanel = () => {
  return (
    <input type="text"
      className="form-control search-input w-full p-1 text-black bg-white dark:text-gray-200 dark:bg-secondary-dark-bg"
      placeholder="Найти сотрудника"/>
  )
}

export default SearchPanel;