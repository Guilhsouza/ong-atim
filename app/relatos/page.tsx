"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Relatos() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-background pt-20">

                {/* Hero / Faixa padrão */}
                <section className="bg-primary py-16 text-primary-foreground">
                    <div className="mx-auto max-w-6xl px-4 text-center">
                        <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
                            Relatos
                        </h1>
                        <p className="mx-auto max-w-2xl text-pretty text-lg opacity-90">
                            Em breve você poderá acompanhar histórias reais de transformação
                            e impacto na vida das pessoas que ajudamos.
                        </p>
                    </div>
                </section>

                <section className="flex items-center justify-center py-24">
                    <p className="text-muted-foreground text-lg">
                        🚧 Novidades em breve...
                    </p>
                </section>

            </main>

            <Footer />
        </>
    )
}