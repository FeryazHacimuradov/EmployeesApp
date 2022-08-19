import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';

const Filter = () => {
  return (
    <div className="search-panel mx-48"
        style={{ backgroundColor: '#3d5a81' }}
    >
        <SearchPanel/>
        <AppFilter/>
    </div>
  )
}

export default Filter;