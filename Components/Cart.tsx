import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { HiMinus } from 'react-icons/hi'

export const Cart = () => {
    return (
        <React.Fragment>
            <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
                <h2 className="font-bold">Shopping Cart</h2>
                <span className="text-gray-600">(1 item)</span>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between mb-4 space-x-3">
                    <Image src="/Business-card-example.jpg" width={50} height={50}
                        alt="Business Card Template" />
                    <div className="flex-1">
                        <h3 className="text-md font-bold">Product Title</h3>
                        <span className="text-gray-600 text-sm">$29.99</span>
                    </div>
                    <Button size="icon" variant="ghost">
                        <HiMinus size={20} />
                    </Button>
                </div>
            </div>
            <div className="px-4 py-3 bg-gray-200 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="font-bold text-lg">$74.97</span>
                </div>
                <Button size="lg">
                    Checkout
                </Button>
            </div>
        </React.Fragment>
    )
}


export default Cart
