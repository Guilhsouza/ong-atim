'use client'

import { HeroCarousel } from "@/components/hero-carousel"
import { SponsorsSection } from "@/components/sponsors-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { useEffect, useRef, useState } from "react"
import { HeroMenu } from "@/components/heroMenu"

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null)


  return (
    <>
      <Header heroRef={heroRef} />
      <main className="min-h-screen bg-background">
        <HeroCarousel heroRef={heroRef} />
        <SponsorsSection />
        <ProjectsSection />
        <Footer />
      </main>

    </>
  )
}

