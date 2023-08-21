"use client"

import React from 'react'
import { Typography } from '@material-tailwind/react'





const TypographyComponent = (props: any) => {
    return (
        <Typography
            color={props.color}
            variant={props.variant}
            className={props.className}
            textGradient={props.textGradient}
            as={props.as}
        >
            {props.children}
        </Typography>
    )
}

export default TypographyComponent