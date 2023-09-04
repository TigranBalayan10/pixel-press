import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import BusinessCardSizes from "@/lib/Data/BusinessCardSizes.json"



const typedBusinessCardSizes: string[] = BusinessCardSizes




const Order = () => {
    return (
        <form action="">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Sizes</SelectLabel>
                        {typedBusinessCardSizes.map((size: string, id: number) => (
                            <SelectItem value={size} key={id}>{size}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </form>
    )
}

export default Order