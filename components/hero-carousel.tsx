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
import navLinks from "@/data/navLinks"

export function HeroCarousel({ heroRef }: {
  heroRef: React.RefObject<HTMLElement | null>

}) {
  const router = useRouter()

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
    <section className="relative h-screen w-full overflow-hidden flex " ref={heroRef}>

      <div className="relative w-150 h-150 2xl:w-200 2xl:h-200 mx-auto">
        <Image
          src={logoAtim}
          alt="Logo ATIM"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="invisible md:visible">
        <HeroMenu
          navLinks={navLinks}
          handleNavClick={handleNavClick}
          scrollToSection={scrollToSection}
        />
      </div>
    </section>
  )
}