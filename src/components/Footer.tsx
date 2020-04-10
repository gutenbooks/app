import React from 'react';

import BuiltWith from './BuiltWith';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light mt-auto py-3">
      <div className="container">
        <span className="small text-muted">
          v{process.env.REACT_APP_VERSION}
          <br/>
          <BuiltWith/>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
