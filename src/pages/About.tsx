import React from 'react';

import Brand from '../components/Brand';

const About: React.FC = () => {
  return (
    <div className="container">
      <p>
        <Brand/>, is the best way to find free ebooks in the public domain.
      </p>

      <p>
        Based on the great work done by <a href="https://gutenberg.org" target="_blank" rel="noopener noreferrer">Project Gutenberg</a> (hence the "guten"), <Brand/> re-catelogs all their books and pulls in rich book metadata from several sources all into one place, making it convenient for you to find what you're looking for.
      </p>
    </div>
  );
}

export default About;
