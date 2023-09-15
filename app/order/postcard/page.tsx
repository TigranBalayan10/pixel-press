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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
// import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from '@/app/api/uploadthing/core';
import ImagePreviewComponent from '../../../components/OrderComponents/imagePreviewComponent'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { postcardDetails, PostcardDetailsType } from '@/lib/Data/Postcard'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { PCSchema } from '@/lib/PCSchema'
import * as z from "zod";


type OptionType = 'sizes' | 'paper' | 'orientation' | 'quantity';
interface ImageInfo {
    key: string;
    url: string;
    name: string;
    size: number;
}
interface SelectedSize {
    width: number;
    height: number;
}


const Postcard = () => {

    const [isSwitchChecked, setIsSwitchChecked] = useState<boolean>(false);
    const [imageFront, setImagesFront] = useState<ImageInfo[]>([]);
    const [imageBack, setImagesBack] = useState<ImageInfo[]>([]);
    const [selectedSize, setSelectedSize] = useState<SelectedSize>({ width: 0, height: 0 });
    const { toast } = useToast();


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
                                <Separator orientation="vertical" className='bg-white' />
                            </div>
                            <div className="flex flex-col justify-start gap-y-3">
                                {optionTypes.map((optionType) => {
                                    const options = postcardDetails[optionType] || [];
                                    return (
                                        <FormField
                                            key={optionTypes.indexOf(optionType)}
                                            control={form.control}
                                            name={optionType}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={(value) => {
                                                        field.onChange(value); // update the form field
                                                        if (optionType === 'sizes') {
                                                            const sizeDetail = (postcardDetails.sizes as { [key: string]: PostcardDetailsType['sizes'][string] })[value as string];
                                                            if (sizeDetail) {
                                                                setSelectedSize({ width: sizeDetail.width, height: sizeDetail.height })
                                                            }
                                                        }
                                                    }} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="w-[300px] md:w-[400px]">
                                                                <SelectValue placeholder={`Select a ${optionType}`} />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                {Array.isArray(options) ? (
                                                                    options.map((option, id) => (
                                                                        <SelectItem value={String(option)} key={id}>{String(option)}</SelectItem>
                                                                    ))
                                                                ) : (
                                                                    Object.keys(options).map((key, id) => (
                                                                        <SelectItem value={key} key={id}>{key}</SelectItem>
                                                                    ))
                                                                )}
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
                                {selectedSize.width > 0 && selectedSize.height > 0 && <>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <FormLabel htmlFor="design_front">Upload Front</FormLabel>
                                        <UploadButton<OurFileRouter>
                                            appearance={{
                                                button:
                                                    "ut-ready:bg-primary ut-uploading:loading ut-uploading:loading-ring ut-uploading:loading-md ut-uploading:text-accent rounded-r-none bg-primary bg-none after:bg-accent p-4 text-sm",
                                                container: "w-max flex-row rounded-md border-cyan-300 bg-slate-800 w-full justify-between",
                                                allowedContent:
                                                    "flex h-8 flex-col items-center justify-center px-2 text-white text-xs",
                                            }}
                                            endpoint="imageUploader"
                                            onClientUploadComplete={(res) => {
                                                if (res) {
                                                    setImagesFront(res)
                                                    // Do something with the response
                                                    console.log("Files: ", res);
                                                    toast({
                                                        variant: "success",
                                                        title: "Front Upload Successful!",
                                                        description: "Click on the image to check your design",
                                                    })
                                                } else {
                                                    setImagesFront([])
                                                }
                                                // alert("Files uploaded successfully!");
                                            }}
                                            onUploadError={(error: Error) => {
                                                // Do something with the error.
                                                toast({
                                                    variant: "destructive",
                                                    title: "Upload was Unsuccessful!",
                                                    description: "Please try again: " + error.message
                                                })
                                            }}
                                        />
                                    </div>
                                    {imageFront && imageFront.length > 0 && <ImagePreviewComponent images={imageFront} selectedSize={selectedSize} />}
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <div className="flex justify-between gap-x-4">
                                            <FormLabel htmlFor="design_back">Upload Back</FormLabel>
                                            <Switch checked={isSwitchChecked} onCheckedChange={checked => {
                                                setIsSwitchChecked(checked);
                                                if (checked) setImagesBack([]);
                                            }} />
                                        </div>
                                        {
                                            isSwitchChecked ? <Input id="back" disabled placeholder='No Back' /> : <UploadButton<OurFileRouter>
                                                appearance={{
                                                    button:
                                                        "ut-ready:bg-primary ut-uploading:loading ut-uploading:loading-ring ut-uploading:loading-xl ut-uploading:text-accent rounded-r-none bg-primary bg-none after:bg-accent p-4 text-sm",
                                                    container: "w-max flex-row rounded-md border-cyan-300 bg-slate-800 w-full justify-between",
                                                    allowedContent:
                                                        "flex h-8 flex-col items-center justify-center px-2 text-white text-xs",
                                                }}
                                                endpoint="imageUploader"
                                                onClientUploadComplete={(res) => {
                                                    if (res) {
                                                        setImagesBack(res)
                                                        // Do something with the response
                                                        console.log("Files: ", res);
                                                        toast({
                                                            variant: "success",
                                                            title: "Back Upload Successful!",
                                                            description: "Click on the image to check your design",
                                                        })
                                                    } else {
                                                        setImagesBack([])
                                                    }
                                                    // alert("Files uploaded successfully!");
                                                }}
                                                onUploadError={(error: Error) => {
                                                    // Do something with the error.
                                                    toast({
                                                        variant: "destructive",
                                                        title: "Upload was Unsuccessful!",
                                                        description: "Please try again: " + error.message
                                                    })
                                                }}
                                            />
                                        }
                                    </div>
                                    {imageBack && imageBack.length > 0 && <ImagePreviewComponent images={imageBack} selectedSize={selectedSize} />}
                                </>}
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