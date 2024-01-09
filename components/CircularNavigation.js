// CircularNavigation.js

import React, { useState } from 'react';
import BestSEOCard from './BestSEOCard';
import GraphicDesignCard from './GraphicDesignCard';
import WebDevelopmentCard from './WebDevelopmentCard';

const CircularNavigation = () => {

  return (
    <>

    <h2 className='container mx-auto bg-blue-300 text-center text-white text-4xl pt-12 font-extrabold text-white leading-normal'>Digital marketing Service we provide</h2>
    
     <div className="container p-14 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-blue-300">
      <BestSEOCard />
      <WebDevelopmentCard />
      <GraphicDesignCard />
    </div>
    </>
   
  );
};

export default CircularNavigation;
