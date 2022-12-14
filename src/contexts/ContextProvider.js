import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [query, setQuery] = useState("");


  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  };



  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider 
        value={{ 
          currentColor, 
          currentMode, 
          setCurrentColor, 
          setCurrentMode, 
          setMode, 
          setColor, 
          themeSettings, 
          setThemeSettings,
          query,
          setQuery,
          }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);