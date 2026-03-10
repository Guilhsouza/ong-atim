import { HeroCarousel } from "@/components/hero-carousel"
import { SponsorsSection } from "@/components/sponsors-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <HeroCarousel />
        <SponsorsSection />
        <ProjectsSection />
        <Footer />
      </main>
    </>
  )
}

