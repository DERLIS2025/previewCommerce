'use client'
import { Suspense, useMemo } from "react"
import ProductCard from "@/components/ProductCard"
import { MoveLeftIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useSelector } from "react-redux"

function ShopContent() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    const section = searchParams.get('section') || ''

    const products = useSelector(state => state.product.list)

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = search
                ? product.name.toLowerCase().includes(search.toLowerCase())
                : true

            const matchesCategory = category
                ? product.category === category
                : true

            const matchesSection = section
                ? product.section === section
                : true

            return matchesSearch && matchesCategory && matchesSection
        })
    }, [products, search, category, section])

    const hasFilters = Boolean(search || category || section)

    return (
        <div className="min-h-[70vh] mx-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h1
                    onClick={() => router.push('/shop')}
                    className="text-2xl text-[var(--muted)] my-6 flex items-center gap-2 cursor-pointer hover:text-[var(--primary)] transition"
                >
                    {hasFilters && <MoveLeftIcon size={20} />}
                    Todos los <span className="text-[var(--foreground)] font-medium">productos</span>
                </h1>

                <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto mb-32">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Shop() {
    return (
        <Suspense fallback={<div className="mx-6 max-w-7xl mx-auto py-10 text-[var(--muted)]">Cargando tienda...</div>}>
            <ShopContent />
        </Suspense>
    );
}
