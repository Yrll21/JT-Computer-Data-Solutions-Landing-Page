/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-full bg-black lg:top-20">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-40 blur-md"
        src={mainHero.img}
        alt="connected dots"
      />
    </div>
  );
};

export default MainHeroImage;
