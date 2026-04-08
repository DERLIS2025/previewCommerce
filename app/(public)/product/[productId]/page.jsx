'use client'

import { addToCart } from "@/lib/features/cart/cartSlice";
import { StarIcon, TagIcon, EarthIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { formatGs } from "@/lib/formatCurrency";

const ProductDetails = ({ product }) => {

    const productId = product.id;
    const cart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const router = useRouter();

    const [mainImage, setMainImage] = useState(product.images[0]);

    const addToCartHandler = () => {
        dispatch(addToCart({ productId }))
    }

    const averageRating = product.rating.reduce((acc, item) => acc + item.rating, 0) / product.rating.length;

    const hasPricingScale = product.pricingScale && product.pricingScale.length > 0;
    const hasSpecialPricing = product.strikethroughPrice || product.unitLabel || hasPricingScale;

    return (
        <div className="flex max-lg:flex-col gap-12">
            <div className="flex max-sm:flex-col-reverse gap-3">
                <div className="flex sm:flex-col gap-3">
                    {product.images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setMainImage(product.images[index])}
                            className="bg-slate-100 flex items-center justify-center size-26 rounded-lg group cursor-pointer"
                        >
                            <Image
                                src={image}
                                className="group-hover:scale-103 group-active:scale-95 transition"
                                alt={product.name}
                                width={45}
                                height={45}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center h-100 sm:size-113 bg-slate-100 rounded-lg">
                    <Image src={mainImage} alt={product.name} width={250} height={250} />
                </div>
            </div>

            <div className="flex-1">
                <h1 className="text-3xl font-semibold text-slate-800">{product.name}</h1>

                <div className='flex items-center mt-2'>
                    {Array(5).fill('').map((_, index) => (
                        <StarIcon
                            key={index}
                            size={14}
                            className='text-transparent mt-0.5'
                            fill={averageRating >= index + 1 ? "#00C950" : "#D1D5DB"}
                        />
                    ))}
                    <p className="text-sm ml-3 text-slate-500">{product.rating.length} Reviews</p>
                </div>

                {!hasSpecialPricing ? (
                    <>
                        <div className="flex items-start my-6 gap-3 text-2xl font-semibold text-slate-800">
                            <p>{formatGs(product.price)}</p>
                            <p className="text-xl text-slate-500 line-through">{formatGs(product.mrp)}</p>
                        </div>

                        <div className="flex items-center gap-2 text-slate-500">
                            <TagIcon size={14} />
                            <p>
                                Save {((product.mrp - product.price) / product.mrp * 100).toFixed(0)}% right now
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="my-6">
                        {product.strikethroughPrice && (
                            <p className="text-sm uppercase tracking-[0.25em] text-slate-400 font-semibold text-center lg:text-left mb-4">
                                Contado: <span className="line-through">{formatGs(product.strikethroughPrice)}</span>
                            </p>
                        )}

                        <div className="border-2 border-green-700 rounded-2xl p-6 text-center max-w-md">
                            <p className="text-xs uppercase tracking-[0.25em] text-green-800 font-semibold">
                                {product.specialPriceLabel || "Precio especial"}
                            </p>

                            <h2 className="text-4xl font-bold mt-2 text-slate-900">
                                {formatGs(product.price)}
                            </h2>

                            <p className="text-green-800 font-semibold uppercase mt-2 tracking-wide">
                                {product.unitLabel || "m² instalado"}
                            </p>
                        </div>

                        {hasPricingScale && (
                            <div className="mt-10 max-w-xl border border-slate-200 rounded-2xl overflow-hidden">
                                <div className="text-center text-xs font-semibold tracking-[0.25em] text-green-800 py-4">
                                    ESCALA DE PRECIOS POR VOLUMEN
                                </div>

                                {product.pricingScale.map((tier, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-between px-6 py-5 border-t border-slate-200 ${
                                            tier.highlight ? "bg-green-50" : "bg-white"
                                        }`}
                                    >
                                        <span className="text-xl sm:text-2xl text-slate-800">
                                            {tier.range}
                                        </span>
                                        <span className="text-xl sm:text-2xl font-bold text-slate-900">
                                            {formatGs(tier.price)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-end gap-5 mt-10">
                    {cart[productId] && (
                        <div className="flex flex-col gap-3">
                            <p className="text-lg text-slate-800 font-semibold">Cantidad</p>
                            <Counter productId={productId} />
                        </div>
                    )}

                    <button
                        onClick={() => !cart[productId] ? addToCartHandler() : router.push('/cart')}
                        className="bg-slate-800 text-white px-10 py-3 text-sm font-medium rounded hover:bg-slate-900 active:scale-95 transition"
                    >
                        {!cart[productId] ? 'Agregar al carrito' : 'Ver carrito'}
                    </button>
                </div>

                <hr className="border-gray-300 my-5" />

                <div className="flex flex-col gap-4 text-slate-500">
                    <p className="flex gap-3">
                        <EarthIcon className="text-slate-400" />
                        Trabajamos en todo el Paraguay
                    </p>
                    <p className="flex gap-3">
                        <CreditCardIcon className="text-slate-400" />
                        Pago seguro y atención confiable
                    </p>
                    <p className="flex gap-3">
                        <UserIcon className="text-slate-400" />
                        Asesoramiento para jardines y espacios exteriores
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
