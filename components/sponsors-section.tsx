"use client"

import { Heart } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { sponsors } from "@/data/sponsors"

export function SponsorsSection() {
  const allSponsors = [...sponsors]

  return (
    <section id="sponsors" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Nossos Doadores
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Pessoas e empresas que acreditam em nossa missão e contribuem para transformar vidas todos os dias.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {allSponsors.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              {item.image || item.logo ? (
                <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src={item.image || item.logo}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
              )}

              <p className="text-center text-sm font-medium text-foreground">
                {item.name}
              </p>

              {"type" in item && (
                <span className="text-xs text-muted-foreground">
                  {item.type}
                </span>
              )}
            </div>
          ))}
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
            Seja um Doador
          </Button>
        </div>
      </div>
    </section>
  )
}