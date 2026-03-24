"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from '@/public/logo-ATIM.jpg'
import navLinks from "@/data/navLinks"

export function Header({
    heroRef,
}: {
    heroRef?: React.RefObject<HTMLElement | null>
}) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            if (pathname !== '/') {
                setIsScrolled(true)
                return
            }

            const hero = heroRef?.current
            if (!hero) return

            const rect = hero.getBoundingClientRect()

            setIsScrolled(rect.bottom <= 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [heroRef])

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
            <div
                className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled || pathname !== "/"
                    ? "bg-card/95 shadow-lg backdrop-blur-sm"
                    : "pointer-events-none opacity-0"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center">
                            <span className="text-lg font-bold">
                                <Image
                                    alt="logo"
                                    src={logo}
                                    className="rounded-full"
                                />
                            </span>
                        </div>
                        <span className="text-xl font-bold text-foreground">
                            Amo Tudo Isso Muito
                        </span>
                    </Link>

                    {/* NAV */}
                    <nav className="hidden md:flex items-center gap-1">
                        <button
                            onClick={() => {
                                if (pathname === "/") {
                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                } else {
                                    router.push("/")
                                }
                                setIsMobileMenuOpen(false)
                            }}
                            className="rounded-lg px-4 py-2 font-medium text-foreground hover:bg-secondary"
                        >
                            Início
                        </button>

                        {navLinks.map((link) =>
                            link.type === "link" ? (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-lg px-4 py-2 font-medium text-foreground hover:bg-secondary"
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link)}
                                    className="rounded-lg px-4 py-2 font-medium text-foreground hover:bg-secondary"
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                        <Button className="ml-2">Doe Agora</Button>
                    </nav>
                </div>

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

            {
                isMobileMenuOpen && (
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
                                onClick={() => scrollToSection("#footer")}
                                className="mt-2 w-full"
                            >
                                Doe Agora
                            </Button>
                        </nav>
                    </div>
                )
            }
        </header >
    )
}
