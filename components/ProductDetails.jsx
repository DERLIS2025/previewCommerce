'use client'

import { addToCart } from "@/lib/features/cart/cartSlice";
import { StarIcon, EarthIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "@/components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { formatGs } from "@/lib/formatCurrency";

const ProductDetails = ({ product }) => {
    const productId = product.id;
    const cart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const router = useRouter();

    const [mainImage, setMainImage] = useState(product.images?.[0] || null);

    const addToCartHandler = () => {
        dispatch(addToCart({ productId }));
    };

    const averageRating =
        product.rating?.length
            ? product.rating.reduce((acc, item) => acc + item.rating, 0) / product.rating.length
            : 0;

    const hasPricingScale = product.pricingScale && product.pricingScale.length > 0;
    const hasSpecialPricing = product.strikethroughPrice || product.unitLabel || hasPricingScale;

    return (
        <div className="flex max-lg:flex-col gap-10">
            <div className="flex max-sm:flex-col-reverse gap-3">
                <div className="flex sm:flex-col gap-3">
                    {product.images?.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setMainImage(image)}
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
                    {mainImage && (
                        <Image src={mainImage} alt={product.name} width={250} height={250} />
                    )}
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
                    <p className="text-sm ml-3 text-slate-500">
                        {product.rating?.length || 0} Reviews
                    </p>
                </div>

                {product.description && (
                    <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>
                )}

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                    {!hasSpecialPricing ? (
                        <div className="flex items-start gap-3 text-2xl font-semibold text-slate-800">
                            <p>{formatGs(product.price)}</p>
                            <p className="text-xl text-slate-500 line-through">
                                {formatGs(product.mrp)}
                            </p>
                        </div>
                    ) : (
                        <div>
                            {product.strikethroughPrice && (
                                <p className="text-sm text-slate-400 mb-3">
                                    Contado: <span className="line-through">{formatGs(product.strikethroughPrice)}</span>
                                </p>
                            )}

                            <div className="border-2 border-green-700 rounded-xl p-5 text-center">
                                <p className="text-xs text-green-700 font-semibold uppercase">
                                    {product.specialPriceLabel || "Precio especial"}
                                </p>

                                <h2 className="text-3xl font-bold mt-2">
                                    {formatGs(product.price)}
                                </h2>

                                <p className="text-green-700 font-semibold mt-1">
                                    {product.unitLabel || "m² instalado"}
                                </p>
                            </div>

                            {hasPricingScale && (
                                <div className="mt-4 border rounded-xl overflow-hidden bg-white">
                                    <div className="px-4 py-2 border-b bg-slate-50 text-sm font-medium text-slate-600">
                                        Escala de precios
                                    </div>
                                    {product.pricingScale.map((tier, index) => (
                                        <div
                                            key={index}
                                            className={`flex justify-between px-4 py-3 border-t text-sm ${
                                                tier.highlight ? "bg-green-50" : ""
                                            }`}
                                        >
                                            <span>{tier.range}</span>
                                            <span className="font-semibold">{formatGs(tier.price)}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex items-end gap-4 mt-5 pt-4 border-t border-slate-200">
                        {cart[productId] && <Counter productId={productId} />}

                        <button
                            onClick={() => (!cart[productId] ? addToCartHandler() : router.push('/cart'))}
                            className="bg-slate-800 text-white px-10 py-3 rounded"
                        >
                            {!cart[productId] ? 'Agregar' : 'Ver carrito'}
                        </button>
                    </div>
                </div>

                <hr className="my-5" />

                <div className="flex flex-col gap-3 text-slate-500">
                    <p className="flex gap-2"><EarthIcon /> Paraguay</p>
                    <p className="flex gap-2"><CreditCardIcon /> Pago seguro</p>
                    <p className="flex gap-2"><UserIcon /> Asesoramiento</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
