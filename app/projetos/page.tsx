"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowLeftRight, Calendar, Users, MapPin } from "lucide-react"
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

    return (
        <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                    src={images[currentIndex]}
                    alt={showAfter ? "Depois" : "Antes"}
                    fill
                    className="object-cover"
                />
                <div className="absolute left-3 top-3 rounded-full bg-foreground/80 px-3 py-1 text-sm text-background">
                    {showAfter ? "Depois" : "Antes"}
                </div>
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </>
            )}

            <div className="mt-4 flex items-center justify-center gap-4">
                <div className="flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-border"}`}
                        />
                    ))}
                </div>

                <Button
                    variant="outline"
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

    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "")
            const el = document.getElementById(id)

            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" })
                }, 100)
            }
        }
    }, [])

    return (
        <>
            <Header />

            <main className="min-h-screen bg-background pt-20">

                <section className="bg-primary py-16 text-primary-foreground">
                    <div className="mx-auto max-w-6xl px-4 text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                            Entidades Atendidas
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg opacity-90">
                            Conheça as transformações que realizamos na comunidade.
                        </p>
                    </div>
                </section>

                <section className="border-b bg-card py-12">
                    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 md:grid-cols-3">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{project.length}</p>
                            <p className="text-sm text-muted-foreground">Projetos</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">3.000+</p>
                            <p className="text-sm text-muted-foreground">Pessoas</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">150+</p>
                            <p className="text-sm text-muted-foreground">Voluntários</p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="mx-auto max-w-6xl px-4 space-y-12">
                        {project.map((project, index) => (
                            <Card
                                key={project.id}
                                id={`project-${project.id}`}
                                className="scroll-mt-24 overflow-hidden border-0 bg-card shadow-lg"
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                                    <div className="p-6 lg:w-1/2">
                                        <ProjectCarousel
                                            beforeImages={project.beforeImages}
                                            afterImages={project.afterImages}
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center p-6 lg:w-1/2">
                                        <CardHeader className="p-0">
                                            <CardTitle className="text-2xl">{project.title}</CardTitle>
                                            <CardDescription>{project.shortDescription}</CardDescription>
                                        </CardHeader>

                                        <CardContent className="p-0 pt-4">
                                            <p className="mb-6 text-sm text-muted-foreground">
                                                {project.fullDescription}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">

                                                <div className="flex flex-col items-center">
                                                    <Users className="h-4 w-4 text-primary mb-1" />
                                                    <p className="font-medium">{project.beneficiados}</p>
                                                    <span className="text-xs text-muted-foreground">Beneficiados</span>
                                                </div>

                                                <div className="flex flex-col items-center">
                                                    <Calendar className="h-4 w-4 text-primary mb-1" />
                                                    <p className="font-medium">
                                                        {project.dataInicio} - {project.dataConclusao}
                                                    </p>
                                                    <span className="text-xs text-muted-foreground">Período</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center mt-4">
                                                <MapPin className="h-4 w-4 text-primary mb-1" />
                                                <p className="font-medium">{project.localizacao}</p>
                                                <span className="text-xs text-muted-foreground">Localização</span>
                                            </div>
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}