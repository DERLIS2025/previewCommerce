'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { formatGs } from '@/lib/formatCurrency'

const ProductCard = ({ product }) => {

    const rating = Math.round(
        product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length
    );

    return (
        <Link href={`/product/${product.id}`} className='group max-xl:mx-auto block'>
            <div className='bg-[var(--card)] h-40 sm:w-60 sm:h-68 rounded-xl flex items-center justify-center border border-[var(--border)] overflow-hidden'>
                <Image
                    width={500}
                    height={500}
                    className='max-h-30 sm:max-h-40 w-auto group-hover:scale-110 transition duration-300'
                    src={product.images[0]}
                    alt={product.name}
                />
            </div>

            <div className='flex justify-between gap-3 text-sm text-[var(--foreground)] pt-3 max-w-60'>
                <div>
                    <p className='font-medium leading-tight'>
                        {product.name}
                    </p>

                    <div className='flex mt-1'>
                        {Array(5).fill('').map((_, index) => (
                            <StarIcon
                                key={index}
                                size={14}
                                className='mt-0.5'
                                fill={rating >= index + 1 ? "var(--primary)" : "#D1D5DB"}
                                stroke="none"
                            />
                        ))}
                    </div>
                </div>

                <p className='font-semibold text-[var(--primary)] whitespace-nowrap'>
                    {formatGs(product.price)}
                </p>
            </div>
        </Link>
    )
}

export default ProductCard
