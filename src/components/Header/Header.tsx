import Image from 'next/image';
import React from 'react';
import { Button } from './Button';

function Header() {
  return (
    <header className="bg-[#313338] flex justify-between items-center w-full p-4">
      <div className="flex justify-center items-center">
        <Image src="Logo.svg" alt="" width={50} height={50} />
        <h2 className="text-white">Cirosoft</h2>
      </div>
      <div className="">
        <Button />
      </div>
    </header>
  );
}

export default Header;
