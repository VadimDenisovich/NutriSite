import React from 'react';
import './Body.css';
import Header from "../header/Header";

interface BodyProps {
    children: React.ReactNode;
}

export default function Body({children}:BodyProps) {
  return (
      <div id='boxBody'>
        <div id='boxBackground'>
          <Header />
          <div id='boxContentBlock'>
            {children}
          </div>
        </div>
      </div>
  )
};