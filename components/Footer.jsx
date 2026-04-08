'use client'
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const MailIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14.6654 4.66699L8.67136 8.48499C8.46796 8.60313 8.23692 8.66536 8.0017 8.66536C7.76647 8.66536 7.53544 8.60313 7.33203 8.48499L1.33203 4.66699" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )

    const PhoneIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.22003 11.045C9.35772 11.1082 9.51283 11.1227 9.65983 11.086" stroke="var(--muted)" strokeWidth="1.5" />
        </svg>
    )

    const MapPinIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.3346 6.66634C13.3346 9.99501" stroke="var(--muted)" strokeWidth="1.5" />
        </svg>
    )

    const FacebookIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.9987 1.66699H12.4987" stroke="var(--muted)" strokeWidth="1.5" />
        </svg>
    )

    const InstagramIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.5846 5.41699H14.593" stroke="var(--muted)" strokeWidth="1.5" />
        </svg>
    )

    const TwitterIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M18.3346 3.33368" stroke="var(--muted)" strokeWidth="1.5" />
        </svg>
    )

    const LinkedinIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13.3346 6.66699" stroke="var(--muted)" strokeWidth="1.5" />
        </svg>
    )

    const linkSections = [
        {
            title: "PRODUCTOS",
            links: [
                { text: "Césped natural", path: "/shop?section=cesped-natural" },
                { text: "Riego automático", path: "/shop?section=riego-automatico" },
                { text: "Jardinería", path: "/shop?category=Jardinería" },
                { text: "Decoración", path: "/shop?section=jardin-necesita" },
            ]
        },
        {
            title: "SITIO",
            links: [
                { text: "Inicio", path: "/" },
                { text: "Nosotros", path: "/nosotros" },
                { text: "Servicios", path: "/servicios" },
                { text: "Contacto", path: "/contacto" },
            ]
        },
        {
            title: "CONTACTO",
            links: [
                { text: "+595 992-588-770", path: "/", icon: PhoneIcon },
                { text: "info@corpicia.com", path: "/", icon: MailIcon },
                { text: "Asunción, Paraguay", path: "/", icon: MapPinIcon }
            ]
        }
    ];

    const socialIcons = [
        { icon: FacebookIcon, link: "#" },
        { icon: InstagramIcon, link: "#" },
        { icon: TwitterIcon, link: "#" },
        { icon: LinkedinIcon, link: "#" },
    ]

    return (
        <footer className="mx-6 bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-[var(--border)] text-[var(--muted)]">

                    {/* Logo */}
                    <div>
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Corpi & Cia"
                                width={140}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>

                        <p className="max-w-[410px] mt-6 text-sm">
                            Servicio de jardinería y empastado en Paraguay.
                            Soluciones profesionales para transformar tu espacio exterior.
                        </p>

                        {/* Redes */}
                        <div className="flex items-center gap-3 mt-5">
                            {socialIcons.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.link}
                                    className="flex items-center justify-center w-10 h-10 bg-[var(--accent)] hover:bg-[var(--primary)] hover:text-white transition rounded-full"
                                >
                                    <item.icon />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5 text-sm">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-medium text-[var(--foreground)] md:mb-5 mb-3">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2.5">
                                    {section.links.map((link, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            {link.icon && <link.icon />}
                                            <Link href={link.path} className="hover:text-[var(--primary)] transition">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                <p className="py-4 text-sm text-[var(--muted)]">
                    © 2024 Corpi & Cia. Todos los derechos reservados.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
