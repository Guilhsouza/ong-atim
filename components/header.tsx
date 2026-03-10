"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
    { label: "Início", href: "/", type: "link" },
    { label: "Padrinhos", href: "#sponsors", type: "scroll" },
    { label: "Projetos", href: "/projetos", type: "link" },
    { label: "Contato", href: "#footer", type: "scroll" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        if (pathname !== "/") {
            router.push("/")

            setTimeout(() => {
                const element = document.querySelector(href)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            }, 100)

            return
        }

        const element = document.querySelector(href)

        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }

        setIsMobileMenuOpen(false)
    }

    const handleNavClick = (link: typeof navLinks[0]) => {
        if (link.type === "scroll") {
            scrollToSection(link.href)
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== "/"
                ? "bg-card/95 shadow-lg backdrop-blur-sm"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
                    <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${isScrolled || pathname !== "/" ? "bg-primary" : "bg-card"
                            }`}
                    >
                        <span
                            className={`text-lg font-bold ${isScrolled || pathname !== "/" ? "text-primary-foreground" : "text-primary"
                                }`}
                        >
                            ATIM
                        </span>
                    </div>
                    <span
                        className={`text-xl font-bold transition-colors ${isScrolled || pathname !== "/" ? "text-foreground" : "text-card"
                            }`}
                    >
                        Amo Tudo Isso Muito
                    </span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) =>
                        link.type === "link" ? (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-lg px-4 py-2 font-medium transition-colors ${isScrolled || pathname !== "/"
                                    ? "text-foreground hover:bg-secondary"
                                    : "text-card hover:bg-card/20"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link)}
                                className={`rounded-lg px-4 py-2 font-medium transition-colors ${isScrolled || pathname !== "/"
                                    ? "text-foreground hover:bg-secondary"
                                    : "text-card hover:bg-card/20"
                                    }`}
                            >
                                {link.label}
                            </button>
                        )
                    )}
                    <Button
                        onClick={() => scrollToSection("#footer")}
                        className="ml-2"
                    >
                        Doe Agora
                    </Button>
                </nav>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`rounded-lg p-2 md:hidden ${isScrolled || pathname !== "/" ? "text-foreground" : "text-card"
                        }`}
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="border-t border-border bg-card px-4 py-4 md:hidden">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) =>
                            link.type === "link" ? (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="rounded-lg px-4 py-3 text-left font-medium text-foreground transition-colors hover:bg-secondary"
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link)}
                                    className="rounded-lg px-4 py-3 text-left font-medium text-foreground transition-colors hover:bg-secondary"
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                        <Button
                            onClick={() => scrollToSection("#contact")}
                            className="mt-2 w-full"
                        >
                            Doe Agora
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
