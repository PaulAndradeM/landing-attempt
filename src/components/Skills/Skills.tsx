'use client';

import {
  IconBrandReact,
  IconBrandDjango,
  IconBrandPython,
  IconBrandTypescript,
  IconBrandAngular,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandPrisma,
  IconBrandFigma,
} from '@tabler/icons-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FlipWords } from '../AceternityUI/flip-words';

export default function Skills() {
  const iconSize = 50;

  const skills = [
    {
      id: 1,
      name: 'React',
      icon: <IconBrandReact size={iconSize} />,
      color: 'text-[#61DAFB]',
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: (
        <Image
          src="skills-icon/javascript-icon.svg"
          alt=""
          width={iconSize}
          height={iconSize}
        />
      ),
      color: 'text-[#F7DF1E]',
    },
    {
      id: 3,
      name: 'Django',
      icon: <IconBrandDjango size={iconSize} />,
      color: 'text-green-400',
    },
    {
      id: 4,
      name: 'Python',
      icon: <IconBrandPython size={iconSize} />,
      color: 'text-[#3776AB]',
    },
    {
      id: 5,
      name: 'TypeScript',
      icon: <IconBrandTypescript size={iconSize} />,
      color: 'text-[#3178C6]',
    },
    {
      id: 6,
      name: 'Angular',
      icon: <IconBrandAngular size={iconSize} />,
      color: 'text-[#DD0031]',
    },
    {
      id: 7,
      name: 'Next.js',
      icon: <IconBrandNextjs size={iconSize} />,
      color: 'text-[#fff]',
    },
    {
      id: 8,
      name: 'Node.js',
      icon: <IconBrandNodejs size={iconSize} />,
      color: 'text-[#339933]',
    },
    {
      id: 9,
      name: 'Git',
      icon: <IconBrandGit size={iconSize} />,
      color: 'text-[#F05032]',
    },
    {
      id: 10,
      name: 'Tailwind CSS',
      icon: <IconBrandTailwind size={iconSize} />,
      color: 'text-[#38B2AC]',
    },
    {
      id: 11,
      name: 'MongoDB',
      icon: <IconBrandMongodb size={iconSize} />,
      color: 'text-[#47A248]',
    },
    {
      id: 12,
      name: 'MySQL',
      icon: <IconBrandMysql size={iconSize} />,
      color: 'text-[#00758F]',
    },
    {
      id: 13,
      name: 'Prisma',
      icon: <IconBrandPrisma size={iconSize} />,
      color: 'text-[#2D3748]',
    },
    {
      id: 14,
      name: 'Figma',
      icon: <IconBrandFigma size={iconSize} />,
      color: 'text-[#F24E1E]',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-normal text-gray-200">
            Construimos tus ideas con
            <span className="block text-white font-semibold mt-4">
              <FlipWords
                skills={skills.map((skill) => ({
                  name: skill.name,
                  color: skill.color,
                }))}
                className="font-semibold"
                duration={2000}
              />
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-4">
            para que tu proyecto sea un éxito.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((item) => (
            <motion.div
              key={item.id}
              className="bg-[#15171D] rounded-lg shadow-md p-4 flex flex-col items-center text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${item.color} mb-2`}>{item.icon}</div>
              <p className="text-sm font-medium text-gray-300">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
