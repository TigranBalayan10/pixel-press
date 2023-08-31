import React from 'react'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import Image from 'next/image'


const Hero = () => {
    return (
        <div className="hero bg-secondary w-screen mt-5 md:mt-10 p-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image src="/working_color_choice.jpg" alt="Color choice stock photo" quality={50} width={700} height={700} className="rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Transforming Your Ideas into Tangible Brilliance.</h1>
                    <p className="py-6">Explore our diverse range of printing solutions designed to bring your creative visions to life. Whether you need professional business cards, eye-catching banners, or customized merchandise, we offer unmatched quality and fast turnaround times.
                    </p>
                    <Button size="lg" >Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
