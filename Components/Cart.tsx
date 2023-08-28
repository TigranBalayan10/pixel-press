import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { HiOutlineTrash } from 'react-icons/hi'

export const Cart = () => {
    return (
        <div className='p-4 space-y-2'>
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leadi sm:pr-8">Business Card</h3>
                                    <p className="text-sm text-gray-400">Quantity: 250</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">59.99€</p>
                                    <p className="text-sm line-through text-gray-600">75.50€</p>
                                </div>
                            </div>
                            <div className="flex text-sm">
                                <Button type="button" size="sm" variant="ghost" className='space-x-1'>
                                    <HiOutlineTrash className="w-4 h-4" />
                                    <span className="text-gray-400">Remove</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leadi sm:pr-8">Business Card</h3>
                                    <p className="text-sm text-gray-400">Quantity: 250</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">59.99€</p>
                                    <p className="text-sm line-through text-gray-600">75.50€</p>
                                </div>
                            </div>
                            <div className="flex text-sm">
                                <Button type="button" size="sm" variant="ghost" className='space-x-1'>
                                    <HiOutlineTrash className="w-4 h-4" />
                                    <span className="text-gray-400">Remove</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="space-y-1 text-right">
                <p>Total amount:
                    <span className="font-semibold">357 €</span>
                </p>
                <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end space-x-4">
                <button type="button" className="px-6 py-2 border rounded-md border-violet-400">Back
                    <span className="sr-only sm:not-sr-only">to shop</span>
                </button>
                <button type="button" className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </button>
            </div>
        </div>
    )
}


export default Cart
