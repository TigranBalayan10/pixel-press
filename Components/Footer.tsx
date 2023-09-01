import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FaSquareTwitter, FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-secondary text-base-content rounded mt-5">
            <div className="grid grid-flow-col gap-4">
                <Link href="/about">
                    <Button size="sm" variant="link">AboutUs</Button>
                </Link>
                <Link href="/contact">
                    <Button size="sm" variant="link">Contact</Button>
                </Link>
                <Link href="/partners">
                    <Button size="sm" variant="link">Partners</Button>
                </Link>
                <Link href="/terms">
                    <Button size="sm" variant="link">Terms</Button>
                </Link>
                <Link href="/legal">
                    <Button size="sm" variant="link">Legal</Button>
                </Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <FaSquareTwitter size={30} color="#1DA1F2" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaSquareFacebook size={30} color="#1877F2" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaSquareInstagram size={30} color="#E1306C" />
                    </a>

                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by PixelPress</p>
            </div>
        </footer>
    )
}

export default Footer