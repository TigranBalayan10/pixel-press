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
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ProductList from "@/lib/Data/ProductList.json"
import { productList } from "@/lib/types"
import Image from 'next/image'
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { PCSchema } from '@/lib/PCSchema'


type OptionType = 'sizes' | 'paper' | 'orientation' | 'quantity';

const typedProductList: productList[] = ProductList;
type ValueType<T> = T extends 'quantity' ? number : string;

const getPostcardOptions = <T extends OptionType>(type: T): ValueType<T>[] => {
    return typedProductList
        .filter((product): product is productList & Record<T, ValueType<T>[]> => product.title === 'Postcard')
        .map(product => product[type] as ValueType<T>[])
        .flat();
};



const Postcard = () => {
    const form = useForm({
        resolver: zodResolver(PCSchema),
    })

    function onSubmit(data: any) {
        console.log(data)
    }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default Postcard