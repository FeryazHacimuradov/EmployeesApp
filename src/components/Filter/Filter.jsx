import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';

const Filter = ({setQuery, users, onFilterSelect}) => {
  return (
    <div className="search-panel mx-48"
        style={{ backgroundColor: '#3d5a81' }}
    >
        <SearchPanel setQuery={setQuery} />
        <AppFilter 
            users={users}
            />
    </div>
  )
}

export default Filter;