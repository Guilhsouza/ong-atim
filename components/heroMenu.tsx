"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

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

export function HeroMenu({ navLinks, handleNavClick, scrollToSection }: HeroMenuProps) {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (link: NavLink) => {
        if (link.href === "/") {
            if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" })
            } else {
                router.push("/")
            }
            return
        }

        if (link.type === "scroll") {
            handleNavClick(link)
            return
        }

        router.push(link.href)
    }

    return (
        <div className="absolute right-7 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">

            {navLinks.map((link) => (
                <button
                    key={link.href}
                    onClick={() => handleClick(link)}
                    className="rounded-lg cursor-pointer bg-black/40 px-4 py-2 text-sm text-white backdrop-blur hover:bg-black/60 transition"
                >
                    {link.label}
                </button>
            ))}

            <Button onClick={() => scrollToSection("#footer")} className="cursor-pointer">
                Doe Agora
            </Button>
        </div>
    )
}