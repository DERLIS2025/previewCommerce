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
  if (!product) {
    return (
      <div className="py-20 text-center text-slate-500">
        Producto no encontrado.
      </div>
    );
  }

  const productId = product.id;
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const router = useRouter();

  const [mainImage, setMainImage] = useState(product.images?.[0] || null);

  const addToCartHandler = () => {
    dispatch(addToCart({ productId }));
  };

  const averageRating = product.rating?.length
    ? product.rating.reduce((acc, item) => acc + item.rating, 0) / product.rating.length
    : 0;

  const hasPricingScale =
    Array.isArray(product.pricingScale) && product.pricingScale.length > 0;

  const hasSpecialPricing = Boolean(
    product.strikethroughPrice || product.unitLabel || hasPricingScale
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* GALERÍA */}
        <div className="w-full lg:w-[48%]">
          <div className="flex flex-col-reverse sm:flex-row gap-3">
            <div className="flex sm:flex-col gap-3">
              {product.images?.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setMainImage(image)}
                  className={`bg-slate-100 flex items-center justify-center w-16 h-16 rounded-lg border transition cursor-pointer overflow-hidden ${
                    mainImage === image
                      ? "border-green-600"
                      : "border-transparent hover:border-green-600"
                  }`}
                >
                  <Image
                    src={image}
                    alt={product.name}
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>

            <div className="flex-1 flex justify-center items-center h-72 sm:h-[420px] bg-slate-100 rounded-xl overflow-hidden">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={product.name}
                  width={340}
                  height={340}
                  className="object-contain max-h-[85%] w-auto h-auto"
                />
              )}
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="w-full lg:w-[52%]">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center mt-3">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <StarIcon
                  key={index}
                  size={15}
                  className="text-transparent mt-0.5"
                  fill={averageRating >= index + 1 ? "#00C950" : "#D1D5DB"}
                />
              ))}
            <p className="text-sm ml-3 text-slate-500">
              {product.rating?.length || 0} Reviews
            </p>
          </div>

          {!hasSpecialPricing ? (
            <>
              <div className="my-6">
                <div className="flex items-start gap-3 text-2xl sm:text-3xl font-semibold text-slate-800">
                  <p>{formatGs(product.price)}</p>
                  <p className="text-lg sm:text-xl text-slate-500 line-through">
                    {formatGs(product.mrp)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6">
                {cart[productId] && <Counter productId={productId} />}

                <button
                  onClick={() =>
                    !cart[productId] ? addToCartHandler() : router.push("/cart")
                  }
                  className="bg-green-700 hover:bg-green-800 transition text-white px-8 py-3 rounded-lg font-semibold w-full sm:w-auto"
                >
                  {!cart[productId] ? "Agregar" : "Ver carrito"}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="my-6">
                {product.strikethroughPrice && (
                  <p className="text-sm text-slate-400 mb-3">
                    Contado:{" "}
                    <span className="line-through">
                      {formatGs(product.strikethroughPrice)}
                    </span>
                  </p>
                )}

                <div className="border border-green-600 rounded-xl p-6 text-center max-w-full sm:max-w-md shadow-sm">
                  <p className="text-xs text-green-700 font-semibold uppercase tracking-wide">
                    {product.specialPriceLabel || "Precio especial"}
                  </p>

                  <h2 className="text-4xl font-bold mt-2 text-slate-900">
                    {formatGs(product.price)}
                  </h2>

                  <p className="text-green-700 font-semibold mt-2 text-lg">
                    {product.unitLabel || "m² instalado"}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  {cart[productId] && <Counter productId={productId} />}

                  <button
                    onClick={() =>
                      !cart[productId] ? addToCartHandler() : router.push("/cart")
                    }
                    className="bg-slate-800 hover:bg-slate-900 transition text-white px-8 py-3 rounded-lg font-semibold w-full sm:w-auto"
                  >
                    {!cart[productId] ? "Agregar" : "Ver carrito"}
                  </button>
                </div>

                {hasPricingScale && (
                  <div className="mt-6 border border-slate-300 rounded-xl overflow-hidden">
                    {product.pricingScale.map((tier, index) => (
                      <div
                        key={index}
                        className={`flex justify-between items-center px-4 sm:px-5 py-4 border-t first:border-t-0 text-sm sm:text-base ${
                          tier.highlight ? "bg-green-50" : "bg-white"
                        }`}
                      >
                        <span className="text-slate-800">{tier.range}</span>
                        <span className="font-semibold text-slate-900">
                          {formatGs(tier.price)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          <hr className="my-4 border-slate-300" />

          <div className="flex flex-col gap-2 text-slate-600 text-sm mt-4">
            <p className="flex gap-2 items-center">
              <EarthIcon size={18} />
              Paraguay
            </p>
            <p className="flex gap-2 items-center">
              <CreditCardIcon size={18} />
              Pago seguro
            </p>
            <p className="flex gap-2 items-center">
              <UserIcon size={18} />
              Asesoramiento
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
