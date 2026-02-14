export type Product = {
  slug: string;
  title: string;
  summary?: string;
  images: string[];
  videos?: string[];
  highlights?: string[];
  category: "machines" | "medical";
};

export const company = {
  name: "Electroart",
  phoneRaw: "+919422005382",
  phoneDisplay: "(+91) 9422005382",
  email: "arjun.borole@electroart.co.in",
  address: "Gat no 71, Talawade Industrial Area, Jyotiba Nagar, Talawade, Pune - 411062.",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.4474434793624!2d73.79219311489526!3d18.68877558731123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b70a7c58f09d%3A0x39acbdbd966d445f!2sELECTROART!5e0!3m2!1sen!2sin!4v1686976703499!5m2!1sen!2sin",
};

export const intro =
  "ELECTROART has 27 years old establishment. Engaged in manufacturing of trolleys, cabinets, enclosure, bezels for medical equipment manufacturing companies and electronics industries. We develop high performance and precision products for our clients at affordable cost.";

export const whyChooseUs = [
  "Develop high performance and precision products",
  "Decades of engineering experience and efficient development",
  "Affordable price",
];

export const products: Product[] = [
  {
    slug: "ir-dryer",
    title: "IR Dryer",
    category: "machines",
    images: ["/img/product/ir-dryer/1.jpg", "/img/product/ir-dryer/3.jpg", "/img/product/ir-dryer/4.jpg"],
    videos: ["https://www.youtube.com/embed/VQJpJaSTpPg"],
  },
  {
    slug: "uv-dryer",
    title: "UV Dryer",
    category: "machines",
    images: ["/img/product/uv-dryer/single-uv-dryer.JPG", "/img/product/uv1.jpg"],
    videos: ["https://www.youtube.com/embed/PmBkEx4OVCQ", "https://www.youtube.com/embed/3_FLRvJIYMc"],
  },
  {
    slug: "ir-uv-combo-drayer",
    title: "IR/UV Combo Dryer",
    category: "machines",
    images: [
      "/img/product/ir-uv-combo/1.jpg",
      "/img/product/ir-uv-combo/2.jpg",
      "/img/product/ir-uv-combo/4.jpg",
      "/img/product/ir-uv-combo/5.jpg",
    ],
    videos: [
      "https://www.youtube.com/embed/Xc9IeVPgLW8",
      "https://www.youtube.com/embed/LKj95On6YsU",
      "https://www.youtube.com/embed/3zm_RtwpxL0",
      "https://www.youtube.com/embed/WZF6SDEI3zQ",
    ],
  },
  {
    slug: "uv-meter",
    title: "UV Energy Meter",
    category: "machines",
    images: ["/img/product/uv-meter/1.jpg"],
    highlights: ["Includes product manual PDF in Downloads."],
  },
  {
    slug: "medical-grade-compressor-for-ventilator",
    title: "Medical Grade Compressor For Ventilator",
    category: "machines",
    images: [
      "/img/product/compressor/compressor-for-vantilator.jpg",
      "/img/product/Compressor.jpg",
      "/img/product/compressor/c1.jpg",
      "/img/product/compressor/c2.jpg",
      "/img/product/compressor/c3.jpg",
    ],
  },
  {
    slug: "medical-grade-compressor-for-gynaes",
    title: "Medical Grade Compressor For Gynae",
    category: "medical",
    images: ["/img/product/Compressor.jpg"],
  },
  {
    slug: "trolleys",
    title: "Medical Equipments Trolley",
    category: "machines",
    highlights: [
      "Trolley for Colour Dopplers",
      "Ultrasound Machine Trolley",
      "Anesthesia Machine Trolley",
      "Physiotherapy Machine Trolley",
      "Trolley for Endosurgery Equipments",
      "Medical Devices Trolley",
    ],
    images: [
      "/img/product/trolleys/14.jpg",
      "/img/product/trolleys/13.jpg",
      "/img/product/trolleys/12.JPG",
      "/img/product/trolleys/1.JPG",
      "/img/product/trolleys/2.JPG",
      "/img/product/trolleys/3.JPG",
      "/img/product/trolleys/4.jpg",
      "/img/product/trolleys/5.jpg",
      "/img/product/trolleys/6.jpg",
      "/img/product/trolleys/7.jpg",
      "/img/product/trolleys/8.jpg",
      "/img/product/trolleys/9.jpg",
      "/img/product/trolleys/10.jpg",
    ],
  },
  {
    slug: "enclosures",
    title: "Cabinets For Medical Devices & Equipments",
    category: "machines",
    images: [
      "/img/product/enclosure/1.JPG",
      "/img/product/enclosure/2.JPG",
      "/img/product/enclosure/3.JPG",
      "/img/product/enclosure/4.jpg",
      "/img/product/enclosure/5.jpg",
      "/img/product/enclosure/6.jpg",
      "/img/product/enclosure/7.jpg",
      "/img/product/enclosure/8.jpg",
      "/img/product/enclosure/9.jpg",
      "/img/product/enclosure/10.jpg",
      "/img/product/enclosure/11.jpg",
      "/img/product/enclosure/12.jpg",
      "/img/product/enclosure/13.jpg",
      "/img/product/enclosure/14.jpg",
      "/img/product/enclosure/15.jpg",
      "/img/product/enclosure/16.jpg",
      "/img/product/enclosure/17.jpg",
    ],
  },
  {
    slug: "x-ray-machine-trolly",
    title: "X-Ray Machine Parts",
    category: "machines",
    images: [
      "/img/product/x-ray-machine-parts/1.JPG",
      "/img/product/x-ray-machine-parts/2.JPG",
      "/img/product/x-ray-machine-parts/3.JPG",
      "/img/product/x-ray-machine-parts/4.jpg",
      "/img/product/x-ray-machine-parts/5.jpg",
      "/img/product/x-ray-machine-parts/6.jpg",
    ],
  },
  {
    slug: "medical-equipment-and-enclosure-and-cabinets",
    title: "Medical Equipment & Enclosure & Cabinets",
    category: "medical",
    images: [
      "/img/product/medical-equip/1.jpg",
      "/img/product/medical-equip/2.jpg",
      "/img/product/medical-equip/3.jpg",
      "/img/product/medical-equip/4.jpg",
    ],
  },
  {
    slug: "color-doppler-machine-trolly",
    title: "Color Doppler Machine Trolley",
    category: "medical",
    images: ["/img/product/doppler/1.jpg", "/img/product/doppler/2.jpg", "/img/product/doppler/3.jpg"],
  },
  {
    slug: "ultrasound-machine-trolley",
    title: "Ultrasound Machine Trolley",
    category: "medical",
    images: ["/img/product/doppler/1.jpg", "/img/product/doppler/2.jpg", "/img/product/doppler/3.jpg"],
  },
  {
    slug: "annnesthasia-work-station-trolly",
    title: "Anesthesia Workstation Trolley",
    category: "medical",
    images: ["/img/product/annesthesia/annesthesia1.jpg", "/img/product/annesthesia/annesthesia2.jpg"],
  },
  {
    slug: "physiotherapy-equipment-trolly",
    title: "Physiotherapy Equipment Trolley",
    category: "medical",
    images: ["/img/product/phisiotherphy/2.jpg"],
  },
  {
    slug: "endo-surgery-trolly",
    title: "Endo Surgery Trolley",
    category: "medical",
    images: ["/img/product/endo surgery/1.jpg", "/img/product/endo surgery/2.jpg"],
  },
  {
    slug: "x-ray-machine-covers",
    title: "X-Ray Machine Covers",
    category: "medical",
    images: ["/img/product/x-ray-cover/1.jpg", "/img/product/x-ray-cover/2.jpg", "/img/product/x-ray-cover/3.jpg"],
  },
  {
    slug: "carbon-fibre-products",
    title: "Carbon Fibre Products",
    category: "medical",
    images: [
      "/img/product/Carbon/1.jpg",
      "/img/product/Carbon/2.jpg",
      "/img/product/Carbon/3.jpg",
      "/img/product/Carbon/4.jpg",
      "/img/product/Carbon/5.jpg",
      "/img/product/Carbon/6.jpg",
      "/img/product/Carbon/7.jpg",
    ],
  },
];

export const galleryImages = [
  "/img/product/1.JPG",
  "/img/product/2.jpg",
  "/img/product/3.JPG",
  "/img/product/4.JPG",
  "/img/product/5.JPG",
  "/img/product/6.JPG",
  "/img/product/7.JPG",
  "/img/product/8.JPG",
  "/img/product/9.JPG",
  "/img/product/10.JPG",
  "/img/product/medical-equip/1.jpg",
  "/img/product/medical-equip/2.jpg",
  "/img/product/medical-equip/3.jpg",
  "/img/product/doppler/2.jpg",
  "/img/product/doppler/1.jpg",
  "/img/product/doppler/3.jpg",
  "/img/product/Compressor.jpg",
  "/img/product/phisiotherphy/2.jpg",
  "/img/product/endo surgery/1.jpg",
  "/img/product/endo surgery/2.jpg",
  "/img/product/annesthesia/annesthesia1.jpg",
  "/img/product/Carbon/1.jpg",
  "/img/product/ir-dryer/1.jpg",
  "/img/product/x-ray-cover/1.jpg",
  "/img/product/x-ray-cover/2.jpg",
];

export const downloads = [
  {
    title: "UV Meter Manual",
    href: "/img/product/uv-meter/UV meter manual 30.09.20.pdf",
  },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Our Products" },
  { href: "/gallary", label: "Gallery" },
  { href: "/download", label: "Download" },
  { href: "/contact-us", label: "Contact Us" },
];
