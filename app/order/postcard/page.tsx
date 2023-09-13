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
// import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from '@/app/api/uploadthing/core';
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ProductList from "@/lib/Data/ProductList.json"
import { productList } from "@/lib/types"
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
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
    const [images, setImages] = useState<{
        name: string;
        key: string;
        url: string;
        size: number;
    }[]>([]);

    const imagePreview = images.map((image) => (
        <>
            <div className="flex items-center" key={image.key}>
                <div className="flex-shrink-0">
                    <Image
                        src={image.url}
                        alt={image.name}
                        width={50}
                        height={50}
                    />
                </div>
                <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{image.name}</div>
                    <div className="text-sm text-gray-500">{(image.size/1024).toPrecision(4)} KB</div>
                </div>
            </div>
        </>
    ));


    const form = useForm<z.infer<typeof PCSchema>>({
        resolver: zodResolver(PCSchema),
    })


    function onSubmit(data: z.infer<typeof PCSchema>) {
        console.log({data, images})
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
                                    <UploadButton<OurFileRouter>
                                        appearance={{
                                            button:
                                                "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-primary bg-none after:bg-accent p-4 text-sm",
                                            container: "w-max flex-row justify-between rounded-md border-cyan-300 bg-slate-800 w-full",
                                            allowedContent:
                                                "flex h-8 flex-col items-center justify-center px-2 text-white text-xs",
                                        }}
                                        endpoint="imageUploader"
                                        onClientUploadComplete={(res) => {
                                            if (res) {
                                                setImages(res)
                                                // Do something with the response
                                                console.log("Files: ", res);
                                               
                                            } else {
                                                setImages([])
                                            }
                                            // alert("Files uploaded successfully!");
                                        }}
                                        onUploadError={(error: Error) => {
                                            // Do something with the error.
                                            alert(`ERROR! ${error.message}`);
                                        }}
                                    />
                                </div>
                                        {images && images.length > 0 && imagePreview}
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <div className="flex justify-between gap-x-4">
                                        <FormLabel htmlFor="design_back">Upload Back</FormLabel>
                                        <Switch checked={isSwitchChecked} onCheckedChange={checked => setIsSwitchChecked(checked)} />
                                    </div>
                                    {
                                        isSwitchChecked ? <Input id="back" disabled placeholder='No Back' /> : <UploadButton<OurFileRouter>
                                            appearance={{
                                                button:
                                                    "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-primary bg-none after:bg-accent p-4 text-sm",
                                                container: "w-max flex-row justify-between rounded-md border-cyan-300 bg-slate-800 w-full",
                                                allowedContent:
                                                    "flex h-8 flex-col items-center justify-center px-2 text-white text-xs",
                                            }}
                                            endpoint="imageUploader"
                                            onClientUploadComplete={(res) => {
                                                // Do something with the response
                                                console.log("Files: ", res);
                                                alert("Files uploaded successfully!");
                                            }}
                                            onUploadError={(error: Error) => {
                                                // Do something with the error.
                                                alert(`ERROR! ${error.message}`);
                                            }}
                                        />

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