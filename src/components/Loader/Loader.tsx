import React from 'react';
import FoldingCube from './FoldingCube';
import Cube from './Cube';

interface LoaderInterface {
  children: any;
  isLoading: boolean;
}

const Loader: React.SFC<LoaderInterface> = ({children, isLoading}) => {

  if (isLoading) {
    return (
      <FoldingCube className="my-4">
        <Cube className="cube-1"></Cube>
        <Cube className="cube-2"></Cube>
        <Cube className="cube-4"></Cube>
        <Cube className="cube-3"></Cube>
      </FoldingCube>
    );
  } else {
    return (
      <>
        {children}
      </>
    );
  }
}

export default Loader;
