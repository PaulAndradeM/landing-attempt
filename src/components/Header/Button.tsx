'use client';

import React from 'react';
import { HoverBorderGradient } from '../AceternityUI/hover-border-gradient';

export function Button() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-[#4B4D50] text-white  dark:text-white flex items-center space-x-5 px-6"
      >
        <span>Contacto</span>
      </HoverBorderGradient>
    </div>
  );
}
