"use client"

import { Heart } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { exemplo } from "@/public/images/padrinhos/index"

const sponsors = [
  { name: "Guilherme Souza", type: "Padrinho", image: exemplo },
  { name: "João Santos", type: "Padrinho", image: null },
  { name: "Ana Oliveira", type: "Madrinha", image: null },
  { name: "Carlos Pereira", type: "Padrinho", image: null },
  { name: "Lucia Fernandes", type: "Madrinha", image: null },
  { name: "Roberto Costa", type: "Padrinho", image: null },
  { name: "Patricia Lima", type: "Madrinha", image: null },
  { name: "Fernando Alves", type: "Padrinho", image: null },
]

const partners = [
  "Mercado Bom Preço",
  "Padaria União",
  "Farmácia Vida",
  "Auto Peças Centro",
  "Construtora Horizonte",
  "Supermercado Família",
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Nossos Padrinhos e Madrinhas
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Pessoas especiais que acreditam em nossa missão e contribuem para transformar vidas todos os dias.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {sponsor.image ? (
                <div className="relative mb-3 h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {sponsor.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
              <p className="text-center font-medium text-foreground">{sponsor.name}</p>
              <span className="text-sm text-muted-foreground">{sponsor.type}</span>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
            Empresas Parceiras
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((partner, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm"
              >
                {partner}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="text-lg"
            onClick={() => {
              document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Heart className="mr-2 h-5 w-5" />
            Seja um Padrinho
          </Button>
        </div>
      </div>
    </section>
  )
}
