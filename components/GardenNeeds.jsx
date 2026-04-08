'use client'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const GardenNeeds = () => {

    const displayQuantity = 6
    const products = useSelector(state => state.product.list)

    const filteredProducts = products.filter(
        product => product.section === 'jardin-necesita'
    )

    return (
        <div className='px-6 my-30 max-w-6xl mx-auto'>
            <Title
                title='Lo que tu jardín necesita'
                description='Productos y soluciones para complementar tu espacio exterior'
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

export default GardenNeeds
