"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    type: "logo" as const,
    title: "Amo Tudo Isso Muito",
    subtitle: "Transformando vidas, construindo futuros",
  },
  {
    id: 2,
    type: "image" as const,
    image: "/images/hero-1.jpg",
    title: "Juntos Somos Mais Fortes",
    subtitle: "Cada gesto de solidariedade transforma uma realidade",
  },
  {
    id: 3,
    type: "image" as const,
    image: "/images/hero-2.jpg",
    title: "Cultivando Esperança",
    subtitle: "Educação e amor para um futuro melhor",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          {slide.type === "logo" ? (
            <div className="flex h-full w-full flex-col items-center justify-center bg-primary">
              <div className="mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-card shadow-2xl">
                <span className="text-6xl font-bold text-primary">ATIM</span>
              </div>
              <h1 className="mb-4 text-balance text-center text-5xl font-bold text-primary-foreground md:text-7xl">
                {slide.title}
              </h1>
              <p className="text-balance text-center text-xl text-primary-foreground/80 md:text-2xl">
                {slide.subtitle}
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="mt-8 text-lg"
                onClick={() => {
                  router.push('projetos')
                }}
              >
                Conheça Nossa Missão
              </Button>
            </div>
          ) : (
            <div className="relative h-full w-full">
              <Image
                src={slide.image!}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-foreground/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <h2 className="mb-4 text-balance text-4xl font-bold text-card md:text-6xl">
                  {slide.title}
                </h2>
                <p className="text-balance text-lg text-card/90 md:text-2xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          )}
        </div>
      ))
      }

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/20 p-3 text-card backdrop-blur-sm transition-colors hover:bg-card/40"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/20 p-3 text-card backdrop-blur-sm transition-colors hover:bg-card/40"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${index === currentSlide ? "bg-card" : "bg-card/40"
              }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section >
  )
}
