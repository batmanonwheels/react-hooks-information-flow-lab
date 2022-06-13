import React from 'react';

function Header({ handleDarkModeClick, isDarkMode, ShoppingList, itemData }) {
  return (
    <div className={'App ' + (isDarkMode ? 'dark' : 'light')}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? 'Dark' : 'Light'} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default Header;
