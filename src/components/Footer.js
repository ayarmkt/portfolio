import UIContext from '../context/ui-context';
import { useContext } from 'react';

const Footer = () => {
  const uiCtx = useContext(UIContext);

  return (
    <footer className={`footer ${uiCtx.isDark ? 'dark' : null}`}>
      <p>
        Made with ♥ by Aya Takamura © 2021 <br /> All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
