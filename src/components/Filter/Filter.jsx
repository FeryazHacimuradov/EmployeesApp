import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';

const Filter = () => {
  const { currentColor } = useStateContext();
  
  return (
    <div className="search-panel mx-48"
        style={{ backgroundColor: currentColor }}
    >
        <SearchPanel/>
        <AppFilter/>
    </div>
  )
}

export default Filter;