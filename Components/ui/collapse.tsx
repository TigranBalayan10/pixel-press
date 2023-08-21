"use client"

import React from 'react'
import { Collapse } from '@material-tailwind/react'

const CollapseComponent = (props: any) => {
    return (
        <Collapse
            open={props.open}
            animate={props.animate}
            className={props.className}
        >
            {props.children}
        </Collapse>
    )
}

export default CollapseComponent