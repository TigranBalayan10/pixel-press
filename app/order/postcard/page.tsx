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
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ProductList from "@/lib/Data/ProductList.json"
import { productList } from "@/lib/types"
import Image from 'next/image'
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { PCSchema } from '@/lib/PCSchema'
import * as z from "zod";


type OptionType = 'sizes' | 'paper' | 'orientation' | 'quantity';

const typedProductList: productList[] = ProductList;

const getPostcardOptions = (optionType: OptionType) => {
    const postcardProduct = typedProductList.find(product => product.title === 'Postcard');
    if (postcardProduct) {
        return postcardProduct[optionType] || [];
    }
    return [];
};



const Postcard = () => {

    const [isSwitchChecked, setIsSwitchChecked] = useState<boolean>(false);
    const form = useForm<z.infer<typeof PCSchema>>({
        resolver: zodResolver(PCSchema),
    })

    function onSubmit(data: z.infer<typeof PCSchema>) {
        console.log(data)
    }

    const optionTypes: OptionType[] = ['sizes', 'paper', 'orientation', 'quantity'];



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-center">
                <div className="card w-96 m-4 md:w-1/2 bg-secondary text-primary-content mt-5 shadow-lg">
                    <div className="card-body gap-4">
                        <h2 className="card-title">Postcard</h2>
                        <div className="flex justify-between gap-x-4">
                            <figure>
                                {/* Replace with your actual Image component */}
                                <Image src="/postcard_mockup.jpg" className="rounded-lg drop-shadow-md" alt="Postcard stock photo" width={350} height={700} />
                            </figure>
                            <div>
                                <Separator orientation="vertical" />
                            </div>
                            <div className="flex flex-col justify-start gap-y-3">
                                {optionTypes.map((optionType) => {
                                    const options = getPostcardOptions(optionType);
                                    return (
                                        <FormField
                                            key={optionTypes.indexOf(optionType)}
                                            control={form.control}
                                            name={optionType}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="w-[300px] md:w-[400px]">
                                                                <SelectValue placeholder={`Select a ${optionType}`} />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                {options.map((option, id) => (
                                                                    <SelectItem value={String(option)} key={id}>{String(option)}</SelectItem>
                                                                ))}
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    );
                                })}
                                {/* Additional fields like file upload can go here */}
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <FormLabel htmlFor="design_front">Upload Front</FormLabel>
                                    <Input id="front" type="file" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <div className="flex justify-between gap-x-4">
                                        <FormLabel htmlFor="design_back">Upload Back</FormLabel>
                                        <Switch checked={isSwitchChecked} onCheckedChange={checked => setIsSwitchChecked(checked)} />
                                    </div>
                                    {
                                        isSwitchChecked ? <Input id="back" disabled placeholder='No Back' /> : <Input id="back" type="file" />
                                        
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <Button type="submit">Add to Cart</Button>
                            <Button>Checkout</Button>
                        </div>
                    </div>
                </div>

            </form>
        </Form>
    )
}

export default Postcard