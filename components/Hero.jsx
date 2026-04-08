'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'
import { formatGs } from '@/lib/formatCurrency'

const Hero = () => {

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                <div className='relative flex-1 flex flex-col bg-[var(--accent)] rounded-3xl xl:min-h-100 group overflow-hidden'>
                    <div className='p-5 sm:p-16'>
                        <div className='inline-flex items-center gap-3 bg-white text-[var(--primary)] pr-4 p-1 rounded-full text-xs sm:text-sm border border-[var(--border)] shadow-sm'>
                            <span className='bg-[var(--primary)] px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs'>
                                NUEVO
                            </span>
                            Soluciones para tu jardín en todo Paraguay
                            <ChevronRightIcon className='group-hover:ml-2 transition-all' size={16} />
                        </div>

                        <h2 className='text-3xl sm:text-5xl leading-[1.2] my-3 font-medium text-[var(--foreground)] max-w-xs sm:max-w-md'>
                            Todo lo que tu jardín necesita, en un solo lugar
                        </h2>

                        <p className='text-[var(--muted)] text-sm sm:text-base max-w-md mt-4'>
                            Césped natural, riego automático y productos para transformar tu espacio exterior con una solución más práctica y profesional.
                        </p>

                        <div className='text-[var(--foreground)] text-sm font-medium mt-4 sm:mt-8'>
                            <p>Precios desde</p>
                            <p className='text-3xl'>{formatGs(15000)}</p>
                        </div>

                        <div className='flex flex-wrap gap-3 mt-4 sm:mt-10'>
                            <button className='bg-[var(--primary)] text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 rounded-xl hover:bg-[var(--primary-hover)] active:scale-95 transition'>
                                Ver productos
                            </button>

                            <button className='border border-[var(--border)] text-[var(--foreground)] text-sm py-2.5 px-7 sm:py-5 sm:px-12 rounded-xl hover:bg-white active:scale-95 transition'>
                                Ver servicios
                            </button>
                        </div>
                    </div>

                    <Image
                        className='sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm'
                        src={assets.hero_model_img}
                        alt="Imagen destacada"
                    />
                </div>

                <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-[var(--muted)]'>
                    <div className='flex-1 flex items-center justify-between w-full bg-white rounded-3xl p-6 px-8 group border border-[var(--border)] shadow-sm'>
                        <div>
                            <p className='text-3xl font-medium text-[var(--foreground)] max-w-40'>
                                Césped natural
                            </p>
                            <p className='flex items-center gap-1 mt-4 text-[var(--primary)]'>
                                Ver más <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} />
                            </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img1} alt="Césped natural" />
                    </div>

                    <div className='flex-1 flex items-center justify-between w-full bg-[var(--accent)] rounded-3xl p-6 px-8 group border border-[var(--border)]'>
                        <div>
                            <p className='text-3xl font-medium text-[var(--foreground)] max-w-40'>
                                Riego automático
                            </p>
                            <p className='flex items-center gap-1 mt-4 text-[var(--primary)]'>
                                Ver más <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} />
                            </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img2} alt="Riego automático" />
                    </div>
                </div>
            </div>

            <CategoriesMarquee />
        </div>
    )
}

export default Hero
