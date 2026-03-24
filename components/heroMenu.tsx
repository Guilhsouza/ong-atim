"use client"
type NavLink = {
    label: string
    href: string
    type: "link" | "scroll"
}
type HeroMenuProps = {
    navLinks: NavLink[]
    handleNavClick: (link: NavLink) => void
    scrollToSection: (selector: string) => void
}

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroMenu({ navLinks, handleNavClick, scrollToSection }: HeroMenuProps) {
    return (
        <div className="absolute right-7 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">

            {navLinks.map((link) =>
                link.type === "link" ? (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg bg-black/40 px-4 py-2 text-sm text-white backdrop-blur hover:bg-black/60 transition"
                    >
                        {link.label}
                    </Link>
                ) : (
                    <button
                        key={link.href}
                        onClick={() => handleNavClick(link)}
                        className="rounded-lg bg-black/40 px-4 py-2 text-sm text-white backdrop-blur hover:bg-black/60 transition"
                    >
                        {link.label}
                    </button>
                )
            )}

            <Button onClick={() => scrollToSection("#footer")}>
                Doe Agora
            </Button>
        </div>
    )
}