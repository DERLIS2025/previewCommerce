import gs_logo from "./gs_logo.jpg"
import happy_store from "./happy_store.webp"
import upload_area from "./upload_area.svg"
import hero_model_img from "./hero_model_img.png"
import hero_product_img1 from "./hero_product_img1.png"
import hero_product_img2 from "./hero_product_img2.png"

import product_img1 from "./product_img1.png"
import product_img2 from "./product_img2.png"
import product_img3 from "./product_img3.png"
import product_img4 from "./product_img4.png"
import product_img5 from "./product_img5.png"
import product_img6 from "./product_img6.png"
import product_img7 from "./product_img7.png"
import product_img8 from "./product_img8.png"
import product_img9 from "./product_img9.png"
import product_img10 from "./product_img10.png"
import product_img11 from "./product_img11.png"
import product_img12 from "./product_img12.png"

import { ClockFadingIcon, HeadsetIcon, SendIcon } from "lucide-react"

import profile_pic1 from "./profile_pic1.jpg"
import profile_pic2 from "./profile_pic2.jpg"
import profile_pic3 from "./profile_pic3.jpg"

export const assets = {
  upload_area,
  hero_model_img,
  hero_product_img1,
  hero_product_img2,
  gs_logo,
  product_img1,
  product_img2,
  product_img3,
  product_img4,
  product_img5,
  product_img6,
  product_img7,
  product_img8,
  product_img9,
  product_img10,
  product_img11,
  product_img12,
}

export const categories = [
  "Césped",
  "Riego automático",
  "Decoración",
  "Plantas",
]

export const dummyRatingsData = [
  {
    id: "rat_1",
    rating: 4.5,
    review: "Excelente calidad",
    user: { name: "Cliente", image: profile_pic1 },
  },
]

export const dummyStoreData = {
  id: "store_1",
  name: "Corpi & Cia",
  logo: gs_logo,
}

export const productDummyData = [
  // 🌱 CÉSPED (PRINCIPALES)
  {
    id: "prod_1",
    name: "Césped Esmeralda m²",
    description: "Césped natural premium",
    price: 31000,
    mrp: 36000,
    unitLabel: "m² instalado",
    specialPriceLabel: "Precio especial",
    pricingScale: [
      { range: "1 a 25 m²", price: 48000 },
      { range: "26 a 50 m²", price: 43000 },
      { range: "Más de 50 m²", price: 31000, highlight: true },
    ],
    relatedProductIds: ["prod_5", "prod_6", "prod_11", "prod_14"],
    images: [product_img1],
    category: "Césped",
    store: dummyStoreData,
    rating: dummyRatingsData,
  },

  {
    id: "prod_2",
    name: "Césped Siempre verde m²",
    description: "Césped uniforme",
    price: 25000,
    mrp: 35000,
    unitLabel: "m² instalado",
    specialPriceLabel: "Precio especial",
    pricingScale: [
      { range: "1 a 25 m²", price: 38000 },
      { range: "26 a 50 m²", price: 34000 },
      { range: "Más de 50 m²", price: 25000, highlight: true },
    ],
    relatedProductIds: ["prod_5", "prod_8", "prod_11", "prod_14"],
    images: [product_img2],
    category: "Césped",
    store: dummyStoreData,
    rating: dummyRatingsData,
  },

  {
    id: "prod_4",
    name: "Césped Kavaju m²",
    description: "Césped resistente",
    price: 25000,
    mrp: 33000,
    unitLabel: "m² instalado",
    specialPriceLabel: "Precio especial",
    pricingScale: [
      { range: "1 a 25 m²", price: 38000 },
      { range: "26 a 50 m²", price: 34000 },
      { range: "Más de 50 m²", price: 25000, highlight: true },
    ],
    relatedProductIds: ["prod_5", "prod_7", "prod_11", "prod_14"],
    images: [product_img4],
    category: "Césped",
    store: dummyStoreData,
    rating: dummyRatingsData,
  },

  // 💧 RIEGO
  {
    id: "prod_5",
    name: "Mini Rotor Rain Bird",
    price: 350000,
    images: [product_img5],
    category: "Riego automático",
  },
  {
    id: "prod_6",
    name: "Difusor de Riego",
    price: 230000,
    images: [product_img6],
    category: "Riego automático",
  },
  {
    id: "prod_7",
    name: "Válvula de Riego",
    price: 350000,
    images: [product_img7],
    category: "Riego automático",
  },
  {
    id: "prod_8",
    name: "Aspersor Rain Bird",
    price: 310000,
    images: [product_img8],
    category: "Riego automático",
  },

  // 🧱 DECORACIÓN
  {
    id: "prod_9",
    name: "Piso ecológico",
    price: 15000,
    images: [product_img9],
    category: "Decoración",
  },
  {
    id: "prod_11",
    name: "Separador de césped",
    price: 15000,
    images: [product_img11],
    category: "Decoración",
  },
  {
    id: "prod_12",
    name: "Granza blanca",
    price: 20000,
    images: [product_img12],
    category: "Decoración",
  },

  // 🛠 SERVICIO
  {
    id: "prod_14",
    name: "Mantenimiento de jardín",
    price: 235000,
    images: [product_img10],
    category: "Servicios",
  },
]

export const ourSpecsData = [
  {
    title: "Cobertura nacional",
    description: "Trabajamos en todo Paraguay",
    icon: SendIcon,
  },
  {
    title: "Instalación profesional",
    description: "Servicio completo",
    icon: ClockFadingIcon,
  },
  {
    title: "Atención personalizada",
    description: "Soporte directo",
    icon: HeadsetIcon,
  },
]
