"use client"

import React from 'react'
import { NavigationMenuItems } from './NavigationMenuItems';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';
import { FaBars } from 'react-icons/fa';



const Navbar = () => {

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <nav className="bg-slate-400 p-4 shadow-xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/x-logo.svg" width={50} height={50} alt='Pixel press logo' />
          </Link>
        </div>

        {/* Mobile Menu */}
        <Collapsible open={open} onOpenChange={setOpen} className="md:hidden w-full">
          <CollapsibleTrigger className="flex justify-end" asChild>
            <Button variant="secondary" onClick={() => setOpen(!open)}>
              <FaBars />
            </Button>
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
      </div>
    </nav>
  );
};

export default Navbar;

