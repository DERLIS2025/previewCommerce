'use client'
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const cartCount = useSelector(state => state.cart.total);

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/shop?search=${encodeURIComponent(search)}`);
    };

    return (
        <nav className="relative bg-white border-b border-[var(--border)]">
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">

                    <Link href="/" className="relative text-3xl font-semibold text-[var(--foreground)]">
                        <span className="text-[var(--primary)]">go</span>cart
                        <span className="text-[var(--primary)] text-4xl leading-0">.</span>

                        <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-[var(--primary)]">
                            plus
                        </p>
                    </Link>

                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-[var(--muted)]">
                        <Link href="/" className="hover:text-[var(--primary)] transition">Inicio</Link>
                        <Link href="/shop" className="hover:text-[var(--primary)] transition">Tienda</Link>
                        <Link href="/nosotros" className="hover:text-[var(--primary)] transition">Nosotros</Link>
                        <Link href="/contacto" className="hover:text-[var(--primary)] transition">Contacto</Link>

                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-[var(--accent)] px-4 py-3 rounded-full">
                            <Search size={18} className="text-[var(--muted)]" />
                            <input
                                className="w-full bg-transparent outline-none placeholder-[var(--muted)]"
                                type="text"
                                placeholder="Buscar productos"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                required
                            />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition">
                            <ShoppingCart size={18} />
                            Carrito
                            <span className="absolute -top-1 left-3 text-[8px] text-white bg-[var(--primary)] size-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        </Link>

                        <Link
                            href="/login"
                            className="px-8 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] transition text-white rounded-full"
                        >
                            Ingresar
                        </Link>
                    </div>

                    <div className="sm:hidden">
                        <Link
                            href="/login"
                            className="px-7 py-1.5 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-sm transition text-white rounded-full inline-block"
                        >
                            Ingresar
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
