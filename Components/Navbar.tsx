import React from 'react'
import { NavigationMenuItems } from './NavigationMenuItems';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';



const Navbar = () => {
  return (
    <nav className="bg-slate-400 p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex">
          <Link href="/">
            <Image src="/x-logo.svg" width={50} height={50} alt='Pixel press logo' />
          </Link>
        </div>
        <div className="flex space-x-4">
          <NavigationMenuItems />
        </div>
        <div className="flex space-x-4">
          <Button>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/login">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

