'use client';

import React from 'react';
import Image from 'next/image';
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from '../AceternityUI/glowing-stars';

const informacion: { title: string; description: string; icon: string }[] = [
  {
    title: '¿Quiénes somos?',
    description:
      'Brindamos asesoramiento en diseños UI/UX y desarrollo web o movil.',
    icon: 'Cards_Icon/Question_Icon.svg',
  },
  {
    title: 'Reunion',
    description: 'Agenda una reunion para comentarnos tu idea.',
    icon: 'Cards_Icon/Calendar_Icon.svg',
  },
  {
    title: 'Desarrollo',
    description:
      'Desarrollo con gran rendimiento, llevar el codigo en las mejores condiciones y desarrollo rapido.',
    icon: 'Cards_Icon/Buys_Icon.svg',
  },
];

export function Cards() {
  return (
    <div className="xl:flex xl:flex-row justify-center bg-black w-full ">
      <div className="md:grid md:grid-cols-2 md:flex-none lg:flex lg:flex-row  flex flex-col  max-[786px]:items-center ">
        {informacion.map((card) => (
          <GlowingStarsBackgroundCard className="my-5 md:mx-12">
            <div className="flex flex-col items-center justify-center mt-3 ">
              <Image
                src={card.icon}
                className="bg-white p-2 rounded-md"
                alt={card.title}
                width={54}
                height={54}
              />
            </div>
            <GlowingStarsTitle className="text-[#15C6E1] text-center mt-2">
              {card.title}
            </GlowingStarsTitle>
            <div className="flex justify-center items-center mt-2">
              <GlowingStarsDescription className="text-center">
                {card.description}
              </GlowingStarsDescription>
            </div>
          </GlowingStarsBackgroundCard>
        ))}
      </div>
    </div>
  );
}
