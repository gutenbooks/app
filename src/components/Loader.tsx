import React from 'react';

interface LoaderInterface {
  children: any;
  isLoading: boolean;
}

const Loader: React.SFC<LoaderInterface> = ({children, isLoading}) => {

  if (isLoading) {
    return (
      <div>
        <b>loading...</b>
      </div>
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
