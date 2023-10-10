import React, { useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const prices = [
    {
      value: 'Price range(any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 210000',
    },
    {
      value: '10000 - 30000',
    },
    {
      value: '30000 - 60000',
    }
  ]
  return (
    <Menu as='div' className="dropdown relative">
      <Menu.Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className='dropdown-button w-full text-left flex '
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div className=' text-[15px] leading-tight'>
          {price}
          <div>
            <p className='text-[12px]'>Select Your Type</p>
            </div>
        </div>

            {isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
              ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {
          prices.map((price, index) => {
          return (
            <Menu.Item
            onClick={() => {
              setPrice(price.value);
              setIsOpen(false);
            }}
            className='cursor-pointer hover:text-violet-700 transition'
            as='li'
            key={index}
          >
            {price.value}
          </Menu.Item>
          )

})}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
