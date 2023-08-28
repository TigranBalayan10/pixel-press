"use client"

import React from 'react'
import { NavigationMenuItems } from './NavigationMenuItems';
import { Cart } from './Cart';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';
import { navigationMenuTriggerStyle } from './ui/navigation-menu';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { FaBars } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';



const Navbar = () => {

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <nav className="bg-slate-300 p-4 shadow-xl">
      <div className="container mx-auto flex md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Button variant="ghost" size="logo">
            <Link href="/">
              <Image src="/x-logo.svg" width={50} height={50} alt='Pixel press logo' />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Collapsible open={open} onOpenChange={setOpen} className="md:hidden w-full">
            <CollapsibleTrigger className="" asChild>

              <div onClick={() => setOpen(!open)} className={navigationMenuTriggerStyle()}>
                <FaBars size={23} />
              </div>
            </CollapsibleTrigger>



            <CollapsibleContent className="flex flex-col space-y-2 mt-2 md:hidden">
              <NavigationMenuItems />
              <Button>
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button variant="secondary">
                <Link href="/login">Login</Link>
              </Button>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Desktop Menu and Buttons */}
        <div className="hidden md:flex space-x-4">
          <NavigationMenuItems />
        </div>
        <div className="hidden md:flex space-x-1">
          <Button>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/login">Login</Link>
          </Button>
        </div>
        <div className="hidden md:flex">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">
                <FaCartShopping size={23} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-80'>
              <Cart />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

