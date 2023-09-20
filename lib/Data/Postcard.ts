type SizeDetails = {
  width: number;
  height: number;
};

interface ImageInfo {
  key: string;
  url: string;
  name: string;
  size: number;
}

export type PostcardDetailsType = {
  title: string;
  href: string;
  description: string;
  image: string;
  sizes: { [key: string]: SizeDetails };
  paper: string[];
  orientation: string[];
  quantity: string[];
  imageFront: ImageInfo[];
  imageBack?: ImageInfo[];
};

export const postcardDetails = {
  title: "Postcard",
  href: "/order/postcard",
  description:
    "Transform your message into a visual delight, delivered straight to the mailbox.",
  image: "/postcard_mockup.jpg",
  sizes: {
    '4" x 6" (Standard)': { width: 384.0, height: 576.0 },
    '5" X 7"': { width: 480.0, height: 672.0 },
    '3.5" X 8.5"': { width: 336.0, height: 816.0 },
    '4" X 9"': { width: 384.0, height: 864.0 },
    '4.25" X 6"': { width: 408.0, height: 576.0 },
    '4.5" X 6.5"': { width: 432.0, height: 624.0 },
    '4.5" X 11"': { width: 432.0, height: 1056.0 },
    '5.5" X 8.5"': { width: 528.0, height: 816.0 },
    '6" X 8"': { width: 576.0, height: 768.0 },
    '6" X 9"': { width: 576.0, height: 864.0 },
    '6" X 11"': { width: 576.0, height: 1056.0 },
    '8" X 10"': { width: 768.0, height: 960.0 },
    '8.5" X 11"': { width: 816.0, height: 1056.0 },
    '3" X 3"': { width: 288.0, height: 288.0 },
  },
  paper: [
    "14 pt. Gloss",
    "14 pt. Uncoated",
    "100 lb. Recycled Matte Cover",
    "13 pt. Premium Linen",
    "16 pt. Premium Matte",
    "18 pt. Premium Kraft",
    "18 pt. Ultra Premium Pearl",
    "18 pt. Ultra Premium Smooth White",
    "24 pt. Trifecta Green",
    "35 pt. Trifecta Pearl with Kanvas Texture",
    "38 pt. Trifecta Black",
    "38 pt. Trifecta Blue",
    "38 pt. Trifecta Red",
  ],
  orientation: ["Horizontal", "Vertical"],
  quantity: [
    "50",
    "100",
    "250",
    "500",
    "1000",
    "2500",
    "5000",
    "10000",
    "15000",
    "20000",
    "25000",
    "30000",
    "35000",
    "40000",
    "45000",
    "50000",
  ],
};
