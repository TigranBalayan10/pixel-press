"use client"

import * as React from "react"
import Link from "next/link"


import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const products: { title: string; href: string; description: string }[] = [
    {
        title: "Business Card",
        href: "/businesscard",
        description: "Turn this business essential into an unforgettable first impression."
    },
    {
        title: "Postcard",
        href: "/postcard",
        description: "Transform your message into a visual delight, delivered straight to the mailbox."
    },
    {
        title: "Envelope",
        href: "/envelope",
        description: "Make every correspondence count with our custom printed envelopes."
    },
    {
        title: "Brochure",
        href: "/brochure",
        description: "Engage and inform your audience with a professionally designed, easy-to-read brochure."
    },
    {
        title: "Poster",
        href: "/poster",
        description: "Captivate any crowd with stunning visuals that speak louder than words."
    },
    {
        title: "Flyer",
        href: "/flyer",
        description: "Elevate your event or promotion with eye-catching flyers that grab attention."
    },
]




export function NavigationMenuItems() {

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex flex-col justify-start md:flex-row items-start md:text-base"> 
                <NavigationMenuItem>
                    <Link href="/products" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            All Products
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Popular</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[600px]">
                            {products.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/order" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Order
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li className="w-full md:w-auto">
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
