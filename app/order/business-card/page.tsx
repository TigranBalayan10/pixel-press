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
import { Button } from '@/components/ui/button'
import ProductList from "@/lib/Data/ProductList.json"
import { productList } from "@/lib/types"
import Image from 'next/image'


const typedProductList: productList[] = ProductList

const businessCardSizes = typedProductList
    .filter((product): product is productList & { sizes: string[] } => product.title === 'Business Card')
    .map(product => product.sizes as string[])
    .flat();

const businessCardPaperTypes = typedProductList
    .filter((product): product is productList & { paper: string[] } => product.title === 'Business Card')
    .map(product => product.paper as string[])
    .flat();






const OrderBusinessCard = () => {
    return (
        <form className='flex justify-center'>
            <div className="card w-96 m-4 md:w-1/2 bg-secondary text-primary-content mt-5">

                <div className="card-body gap-4">
                    <h2 className="card-title">Business Card</h2>
                    <div className='flex justify-between gap-x-4'>
                        <figure>
                            <Image src="/business-card_mockup.jpg" className="rounded-lg shadow-2xl" alt="Color choice stock photo" width={350} height={700} />
                        </figure>
                        <div className='flex flex-col justify-start gap-y-3'>
                            <Select>
                                <SelectTrigger className="w-[300px] md:w-[400px]">
                                    <SelectValue placeholder="Select a size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Sizes</SelectLabel>
                                        {businessCardSizes.map((size: string, id: number) => (
                                            <SelectItem value={size} key={id}>{size}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[300px] md:w-[400px]">
                                    <SelectValue placeholder="Select Paper" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Paper Thickness</SelectLabel>
                                        {businessCardPaperTypes.map((size: string, id: number) => (
                                            <SelectItem value={size} key={id}>{size}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
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