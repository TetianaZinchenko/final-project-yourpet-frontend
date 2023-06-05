import React from 'react';
import './Spider.css';

export const Spider = ({ children }) => {
  return (
    <div className="container">
      {children}
      <div className="spider">
        <div className="spiderweb"></div>
        <div className="body">
          <div className="eye left"></div>
          <div className="eye right"></div>
        </div>
        <div className="legs left">
          <div className="leg"></div>
          <div className="leg"></div>
          <div className="leg"></div>
        </div>
        <div className="legs right">
          <div className="leg"></div>
          <div className="leg"></div>
          <div className="leg"></div>
        </div>
      </div>
    </div>
  );
};

export default Spider;
