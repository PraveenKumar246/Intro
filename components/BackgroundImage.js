import React from 'react';

const BackgroundImage = ({ imageUrl, children }) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '90vh',
    overflow: 'hidden',
    backgroundImage: `linear-gradient(to right, rgba(169, 169, 169,0.5), rgba(169, 169, 169, 0.3)), url(${imageUrl})`,
    backgroundSize: 'cover', 
  };

  const textStyle = {
    position: 'absolute',
    bottom: '20px',
    color: 'white',
    // textAlign: 'center',
    width: '50%',
    paddingLeft: '10rem'
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>{children}</div>
    </div>
  );
};

export default BackgroundImage;
