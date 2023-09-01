import Image from 'next/image'
import { Button } from './ui/button'
import ProductList from "@/lib/Data/ProductList.json"
import { productList } from "@/lib/types"
import React from 'react'
import Link from 'next/link'

const typedProductList: productList[] = ProductList

const ProductsCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
            {typedProductList.map((product: { title: string, href: string, description: string, image: string }) => (
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure> <Image src={product.image} className="rounded-t-lg" alt="Color choice stock photo" width={700} height={700} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="card-actions justify-end">
                            <Link href={product.href}>
                                <Button size="lg">Order</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsCards