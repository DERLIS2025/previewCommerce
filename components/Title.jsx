'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex flex-col items-center text-center'>
            <h2 className='text-2xl sm:text-3xl font-semibold text-[var(--foreground)]'>
                {title}
            </h2>

            <div className='flex flex-col items-center gap-2 mt-2'>
                <p className='max-w-lg text-sm text-[var(--muted)]'>
                    {description}
                </p>

                {visibleButton && (
                    <Link 
                        href={href} 
                        className='text-[var(--primary)] flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all'
                    >
                        Ver más <ArrowRight size={14} />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Title
