"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"] })

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
        <div className={`absolute h-full justify-center right-5 p-4 flex flex-col gap-3 ${nunito.className}`}>

            {navLinks.map((link) => (
                <button
                    key={link.href}
                    onClick={() => handleClick(link)}
                    className="rounded-lg cursor-pointer font-bold px-4 py-2 text-md text-black text-left backdrop-blur hover:bg-[#0F3A4A] hover:text-[#F2B41B] transition"
                >
                    {link.label}
                </button>
            ))}

            <Button onClick={() => scrollToSection("#footer")} className="cursor-pointer bg-black/90 text-[#F2B41B] hover:bg-[#0F3A4A] border-transparent border-2 hover:border-[#F7D44A] hover:text-[#F7D44A]">
                Doe Agora
            </Button>
        </div>
    )
}