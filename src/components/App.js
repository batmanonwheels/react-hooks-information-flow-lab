import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';
import Header from './Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <Header
      handleDarkModeClick={handleDarkModeClick}
      isDarkMode={isDarkMode}
      ShoppingList={ShoppingList}
      itemData={itemData}
    />
  );
}

export default App;
