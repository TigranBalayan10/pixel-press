"use client"

import { Navbar } from "@material-tailwind/react";


export default function NavbarComponent(props: any) {

    return (
        <Navbar
            variant={props.variant}
            color={props.color}
            shadow={props.shadow}
            blurred={props.blurred}
            fullWidth={props.fullWidth}
            className={props.className}

        >
            {props.children}
        </Navbar>
    );
}
