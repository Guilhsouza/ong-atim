"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowLeftRight, Calendar, Users, DollarSign, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import project from "@/data/projects"

function ProjectCarousel({
    beforeImages,
    afterImages,
}: {
    beforeImages: string[]
    afterImages: string[]
}) {
    const [showAfter, setShowAfter] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = showAfter ? afterImages : beforeImages

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                    src={images[currentIndex]}
                    alt={showAfter ? "Depois" : "Antes"}
                    fill
                    className="object-cover transition-opacity duration-500"
                />
                <div className="absolute left-3 top-3 rounded-full bg-foreground/80 px-3 py-1 text-sm font-medium text-background">
                    {showAfter ? "Depois" : "Antes"}
                </div>
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md transition-colors hover:bg-card"
                        aria-label="Imagem anterior"
                    >
                        <ChevronLeft className="h-4 w-4 text-foreground" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md transition-colors hover:bg-card"
                        aria-label="Próxima imagem"
                    >
                        <ChevronRight className="h-4 w-4 text-foreground" />
                    </button>
                </>
            )}

            <div className="mt-4 flex items-center justify-center gap-4">
                <div className="flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 w-2 rounded-full  transition-colors ${index === currentIndex ? "bg-primary" : "bg-border"
                                }`}
                            aria-label={`Ir para imagem ${index + 1}`}
                        />
                    ))}
                </div>
                <Button
                    variant="outline"
                    className="cursor-pointer"
                    size="sm"
                    onClick={() => {
                        setShowAfter(!showAfter)
                        setCurrentIndex(0)
                    }}
                >
                    <ArrowLeftRight className="mr-2 h-4 w-4" />
                    Ver {showAfter ? "Antes" : "Depois"}
                </Button>
            </div>
        </div>
    )
}

export default function ProjetosPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-20">
                {/* Hero Section */}
                <section className="bg-primary py-16 text-primary-foreground">
                    <div className="mx-auto max-w-6xl px-4 text-center">
                        <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
                            Nossos Projetos
                        </h1>
                        <p className="mx-auto max-w-2xl text-pretty text-lg opacity-90">
                            Conheça em detalhes todas as transformações que realizamos em nossa comunidade.
                            Cada projeto representa uma história de esperança, superação e impacto social real.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="border-b border-border bg-card py-12">
                    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{project.length}</p>
                            <p className="text-sm text-muted-foreground">Projetos Realizados</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">R$ 922k+</p>
                            <p className="text-sm text-muted-foreground">Investidos</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">3.000+</p>
                            <p className="text-sm text-muted-foreground">Pessoas Beneficiadas</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">150+</p>
                            <p className="text-sm text-muted-foreground">Voluntários</p>
                        </div>
                    </div>
                </section>

                {/* Projects List */}
                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="space-y-12">
                            {project.map((project, index) => (
                                <Card key={project.id} className="overflow-hidden border-0 bg-card shadow-lg">
                                    <div
                                        className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                            }`}
                                    >
                                        <div className="p-6 lg:w-1/2">
                                            <ProjectCarousel
                                                beforeImages={project.beforeImages}
                                                afterImages={project.afterImages}
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center p-6 lg:w-1/2">
                                            <CardHeader className="p-0">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <span
                                                        className={`rounded-full px-3 py-1 text-xs font-medium ${project.status === "Concluído"
                                                            ? "bg-green-400/70 text-primary"
                                                            : "bg-lime-300/70 text-primary"
                                                            }`}
                                                    >
                                                        {project.status}
                                                    </span>
                                                </div>
                                                <CardTitle className="mb-2 text-2xl text-foreground">
                                                    {project.title}
                                                </CardTitle>
                                                <CardDescription className="text-base font-medium text-muted-foreground">
                                                    {project.shortDescription}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="p-0 pt-4">
                                                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                                                    {project.fullDescription}
                                                </p>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <DollarSign className="h-4 w-4 text-primary" />
                                                        <div>
                                                            <p className="font-medium text-foreground">{project.investimento}</p>
                                                            <p className="text-xs text-muted-foreground">Investimento</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Users className="h-4 w-4 text-primary" />
                                                        <div>
                                                            <p className="font-medium text-foreground">{project.beneficiados}</p>
                                                            <p className="text-xs text-muted-foreground">Beneficiados</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Calendar className="h-4 w-4 text-primary" />
                                                        <div>
                                                            <p className="font-medium text-foreground">
                                                                {project.dataInicio} - {project.dataConclusao}
                                                            </p>
                                                            <p className="text-xs text-muted-foreground">Período</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <MapPin className="h-4 w-4 text-primary" />
                                                        <div>
                                                            <p className="font-medium text-foreground">{project.localizacao}</p>
                                                            <p className="text-xs text-muted-foreground">Localização</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary py-16 text-primary-foreground">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h2 className="mb-4 text-balance text-3xl font-bold">
                            Quer Apoiar Nossos Projetos?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-pretty opacity-90">
                            Com sua ajuda, podemos continuar transformando vidas e construindo um futuro melhor para nossa comunidade.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="cursor-pointer"
                                onClick={() => {
                                    window.location.href = "/#footer"
                                }}
                            >
                                Seja um Doador
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                className="text-primary cursor-pointer hover:"
                                onClick={() => {
                                    window.location.href = "/#sponsors"
                                }}
                            >
                                Conheça Nossos Padrinhos
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
