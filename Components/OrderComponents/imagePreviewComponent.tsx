import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog"
import Image from 'next/image';

type ImageInfo = {
    key: string;
    url: string;
    name: string;
    size: number;
};

type SelectedSize = {
    width: number;
    height: number;
};

interface ImagePreviewComponentProps {
    images: ImageInfo[];
    selectedSize: SelectedSize;
}

const ImagePreviewComponent: React.FC<ImagePreviewComponentProps> = ({ images, selectedSize }) => {
    const blueTrimInInches = 0.15;
    const redTrimInInches = 0.25;

    return (
        <>
            {images.map((image) => (
                <div className="flex items-center" key={image.key}>
                    <div className="flex-shrink-0">
                        <Dialog>
                            <DialogTrigger asChild className="cursor-pointer">
                                <Image src={image.url} alt={image.name} width={50} height={50} />
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogDescription>Please check your design</DialogDescription>
                                </DialogHeader>
                                <div className='relative w-full h-full'>
                                    <Image
                                        src={image.url}
                                        alt={image.name}
                                        height={selectedSize.height}
                                        width={selectedSize.width}
                                    />
                                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                        {/* Blue Lines */}
                                        <line x1={`${blueTrimInInches}%`} y1="0" x2={`${blueTrimInInches}%`} y2="100%" stroke="blue" strokeWidth="1" />
                                        <line x1={`${100 - blueTrimInInches}%`} y1="0" x2={`${100 - blueTrimInInches}%`} y2="100%" stroke="blue" strokeWidth="1" />
                                        <line x1="0" y1={`${blueTrimInInches}%`} x2="100%" y2={`${blueTrimInInches}%`} stroke="blue" strokeWidth="1" />
                                        <line x1="0" y1={`${100 - blueTrimInInches}%`} x2="100%" y2={`${100 - blueTrimInInches}%`} stroke="blue" strokeWidth="1" />

                                        {/* Red Lines */}
                                        <line x1={`${redTrimInInches}%`} y1="0" x2={`${redTrimInInches}%`} y2="100%" stroke="red" strokeWidth="1" />
                                        <line x1={`${100 - redTrimInInches}%`} y1="0" x2={`${100 - redTrimInInches}%`} y2="100%" stroke="red" strokeWidth="1" />
                                        <line x1="0" y1={`${redTrimInInches}%`} x2="100%" y2={`${redTrimInInches}%`} stroke="red" strokeWidth="1" />
                                        <line x1="0" y1={`${100 - redTrimInInches}%`} x2="100%" y2={`${100 - redTrimInInches}%`} stroke="red" strokeWidth="1" />
                                    </svg>
                                </div>

                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{image.name}</div>
                        <div className="text-sm text-gray-500">{(image.size / 1024).toPrecision(4)} KB</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ImagePreviewComponent;
