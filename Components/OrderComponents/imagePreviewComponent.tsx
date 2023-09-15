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
                                <Image
                                    src={image.url}
                                    alt={image.name}
                                    height={selectedSize.height}
                                    width={selectedSize.width}
                                />
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
