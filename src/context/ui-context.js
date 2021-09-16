import React from 'react';
import { useState } from 'react';

const UIContext = React.createContext({
  mobile: false,
  navIsSticky: false,
  setMobile: () => {},
  setNotMobile: () => {},
  setNavIsSticky: () => {},
  setNavIsNotSticky: () => {},
});

export const UIContextProvider = (props) => {
  const [mobile, setMobile] = useState(false);
  const [navIsSticky, setNavIsSticky] = useState(false);

  const setMobileHandler = () => {
    setMobile(true);
  };

  const setNotMobileHandler = () => {
    setMobile(false);
  };

  const setNavIsStickyHandler = () => {
    if (!mobile) {
      setNavIsSticky(true);
    } else {
      setNavIsSticky(false);
    }
  };

  const setNavIsNotStickyHandler = () => {
    setNavIsSticky(false);
  };

  const contextValue = {
    mobile,
    navIsSticky,
    setMobile: setMobileHandler,
    setNotMobile: setNotMobileHandler,
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
