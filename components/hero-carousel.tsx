"use client"

type NavLink = {
  label: string
  href: string
  type: "link" | "scroll"
}

import Image from "next/image"
import { useRouter } from "next/navigation"
import logoAtim from '../public/logo-ATIM.jpg'
import { HeroMenu } from "./heroMenu"
import { AnchorHTMLAttributes, useEffect, useState } from "react"

export function HeroCarousel({ heroRef }: {
  heroRef: React.RefObject<HTMLElement | null>

}) {
  const router = useRouter()

  const navLinks: NavLink[] = [
    { label: "Início", href: "/", type: "link" },
    { label: "Padrinhos", href: "#sponsors", type: "scroll" },
    { label: "Projetos", href: "/projetos", type: "link" },
    { label: "Relatórios", href: "/relatorios", type: "link" },
    { label: "Contato", href: "#footer", type: "scroll" },
  ]

  const handleNavClick = (link: NavLink) => {
    if (link.type === "scroll") {
      const el = document.querySelector(link.href)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden" ref={heroRef}>

      <Image
        src={logoAtim}
        alt="Logo ATIM"
        fill
        priority
        className="object-contain"
      />

      <HeroMenu
        navLinks={navLinks}
        handleNavClick={handleNavClick}
        scrollToSection={scrollToSection}
      />
    </section>
  )
}