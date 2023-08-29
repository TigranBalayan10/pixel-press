import React from 'react'
import { Button } from './ui/button'
import { HiOutlineTrash } from 'react-icons/hi'

export const Cart = () => {
    return (
        <div className='p-4'>
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
                            <div className="flex text-sm space-x-2">
                                <Button size="sm" variant="destructive" className='space-x-1'>
                                    <HiOutlineTrash className="w-4 h-4" />
                                    <span>Remove</span>
                                </Button>
                                <Button size="sm" className='space-x-1'>
                                    <span>Edit</span>
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
                            <div className="flex text-sm space-x-2">
                                <Button size="sm" variant="destructive" className='space-x-1'>
                                    <HiOutlineTrash className="w-4 h-4" />
                                    <span>Remove</span>
                                </Button>
                                <Button size="sm" className='space-x-1'>
                                    <span>Edit</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="space-y-1 text-right mb-2">
                <p>Total amount:
                    <span className="font-semibold">357 €</span>
                </p>
                <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
            </div>
            <Button className='w-full'>
                Checkout
            </Button>
        </div>
    )
}


export default Cart
