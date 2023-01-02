import React from 'react';
import { aboutImages } from 'constans';

const About = () => {
  return (
    <section className="container mx-auto flex h-[705px] pl-[55px] pt-[130px] pr-[90px] pb-[90px]">
          <div className="bg-green-500 w-1/2 ">
              <ul className='flex space-[30px]'>
                  {
                      aboutImages.map(img => (
                          <li key={img.id}>
                              <img src={img.logo} alt={img.tag} className="w-full" />
                          </li>
                      ))
                  }
              </ul>
          </div>
      <div className="bg-red-500 w-1/2">second div</div>
    </section>
  );
};

export default About;
