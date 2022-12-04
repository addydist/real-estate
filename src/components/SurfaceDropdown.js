import React, { useState, useEffect, useContext } from 'react';


import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const SurfaceDropdown = () => {
  const { surface, setSurface } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const surfaces = [
    {
      value: 'Surface Area range(any)',
    },
    {
      value: '1000 - 1500',
    },
    {
      value: '1500 - 2000',
    },
    {
      value: '2000 - 3000',
    },
    {
      value: '3000 - 4000',
    },
    {
      value: '4000 - 5000',
    },
    {
      value: '5000 - 6000',
    },
    {
      value:'6000-7000',
    }
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{surface}</div>
          <div className='text-[13px]'>Surface Area range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {surfaces.map((surface, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setSurface(surface.value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {surface.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default SurfaceDropdown;