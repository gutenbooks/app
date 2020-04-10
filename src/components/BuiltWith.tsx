import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

const emoji = [
    `❤️`,
    `🤓`,
    `🧠`,
    `💻`,
    `🕶️`,
];

const getRandomIndex = (): number =>{
  return (Math.floor(Math.random() * 10000)) % emoji.length;
}

const BuiltWith: React.FC = () => {
  const [index, setIndex] = useState(getRandomIndex());
  const interval = 30 * 1000; // 6 seconds

  useInterval(() => {
    setIndex(getRandomIndex());
  }, interval);

  return (
    <>
      Built with {emoji[index]} by <a href="https://garethjohnson.io/" target="_blank" rel="noopener noreferrer">Gareth</a> & <a href="https://twitter.com/jspizziri" target="_blank" rel="noopener noreferrer">@jspizziri</a>
    </>
  );
}

export default BuiltWith;
