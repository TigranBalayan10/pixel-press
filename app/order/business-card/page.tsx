"use client"


import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import ProductList from "@/lib/Data/ProductList.json"
import { productList } from "@/lib/types"
import Image from 'next/image'


type OptionType = 'sizes' | 'paper' | 'orientation' | 'quantity' | 'rounded';

const typedProductList: productList[] = ProductList;
type ValueType<T> = T extends 'quantity' ? number : string;

const getBusinessCardOptions = <T extends OptionType>(type: T): ValueType<T>[] => {
    return typedProductList
        .filter((product): product is productList & Record<T, ValueType<T>[]> => product.title === 'Business Card')
        .map(product => product[type] as ValueType<T>[])
        .flat();
};




type RenderSelectProps = {
    options: (string | number)[];
    placeholder: string;
};

const RenderSelect: React.FC<RenderSelectProps> = ({ options, placeholder }) => (
    <Select>
        <SelectTrigger className="w-[300px] md:w-[400px]">
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                {options.map((option, id) => (
                    <SelectItem value={String(option)} key={id}>{String(option)}</SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
    </Select>
);







const OrderBusinessCard = () => {

    const [isSwitchChecked, setIsSwitchChecked] = useState<boolean>(false);

    return (
        <form className='flex justify-center' onSubmit={(e) => e.preventDefault()}>

            <div className="card w-96 m-4 md:w-1/2 bg-secondary text-primary-content mt-5">

                <div className="card-body gap-4">
                    <h2 className="card-title">Business Card</h2>
                    <div className='flex justify-between gap-x-4'>
                        <figure>
                            <Image src="/business-card_mockup.jpg" className="rounded-lg drop-shadow-md" alt="Color choice stock photo" width={350} height={700} />
                        </figure>
                        <div>
                            <Separator orientation='vertical' />
                        </div>
                        <div className='flex flex-col justify-start gap-y-3'>
                            {[
                                { type: 'sizes', placeholder: 'Select a size' },
                                { type: 'paper', placeholder: 'Select Paper' },
                                { type: 'orientation', placeholder: 'Orientation' },
                                { type: 'quantity', placeholder: 'Quantity' },
                                { type: 'rounded', placeholder: 'Rounded' },
                            ].map(({ type, placeholder }) => (
                                <RenderSelect options={getBusinessCardOptions(type as OptionType)} placeholder={placeholder} key={type} />
                            ))}
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="design_back">Upload Front</Label>
                                <Input id="front" type="file" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <div className="flex justify-between gap-x-4">
                                    <Label htmlFor="design_back">Upload Back</Label>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Switch checked={isSwitchChecked} onCheckedChange={checked => setIsSwitchChecked(checked)} />
                                            </TooltipTrigger>
                                            <TooltipContent>No Back</TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                {
                                    isSwitchChecked ? <Input id="back" disabled placeholder='No Back' /> : <Input id="back" type="file" />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Button>Add to Cart</Button>
                        <Button>Checkout</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default OrderBusinessCard