import React from 'react';

const Loader = (props) => {
  const { hidden } = props;
  if (hidden) return (null);
  return (
    <div className="text-center" style={{padding: 15 + 'px'}}>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>
  );
};


export default Loader;
