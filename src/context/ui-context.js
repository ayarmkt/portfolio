import React from 'react';
import { useState } from 'react';

const UIContext = React.createContext({
  navIsSticky: false,
  setNavIsSticky: () => {},
  setNavIsNotSticky: () => {},
});

export const UIContextProvider = (props) => {
  const [navIsSticky, setNavIsSticky] = useState(false);

  const setNavIsStickyHandler = () => {
    setNavIsSticky(true);
  };

  const setNavIsNotStickyHandler = () => {
    setNavIsSticky(false);
  };

  const contextValue = {
    navIsSticky,
    setNavIsSticky: setNavIsStickyHandler,
    setNavIsNotSticky: setNavIsNotStickyHandler,
  };

  return (
    <UIContext.Provider value={contextValue}>
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
