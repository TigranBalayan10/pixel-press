"use client";
import { Button } from "@material-tailwind/react";



export default function ButtonComponent(props: any) {

    return (
        <Button
            color={props.color}
            variant={props.variant}
            fullWidth={props.fullWidth}
            disabled={props.disabled}
            className={props.className}
            size={props.size}
            ripple={props.ripple}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    );
}





