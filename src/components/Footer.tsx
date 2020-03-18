import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light mt-auto py-3">
      <div className="container">
        <span className="small text-muted">
          v{process.env.REACT_APP_VERSION}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
