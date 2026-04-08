'use client'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const BestSelling = () => {

    const displayQuantity = 4
    const products = useSelector(state => state.product.list)

    const filteredProducts = products.filter(
        product => product.section === 'riego-automatico'
    )

    return (
        <div className='px-6 my-30 max-w-6xl mx-auto'>
            <Title
                title='Riego Automático'
                description='Sistemas y accesorios de riego'
                href='/shop'
            />
            <div className='mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12'>
                {filteredProducts.slice(0, displayQuantity).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default BestSelling
