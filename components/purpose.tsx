"use client"

import Image from "next/image"
import { Check } from "lucide-react"

export function PurposeSection() {
    return (
        <section className="py-20 bg-secondary ">
            <div className="mx-auto  max-w-6xl px-4">

                <div className="grid items-center gap-10 lg:grid-cols-2">

                    {/* IMAGEM */}
                    <div className="relative w-full h-77 lg:h-112 overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="/images/fundador.jpg"
                            alt="Fundador da ONG"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                            Nosso Propósito
                        </h2>

                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            A ONG <strong>Amo Tudo Isso Muito</strong> nasceu do desejo genuíno de transformar
                            vidas através de pequenas ações que geram grandes impactos.
                        </p>

                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            Fundada por <strong>Vincenzo</strong>, a iniciativa começou de forma simples,
                            ajudando pessoas próximas, mas rapidamente se tornou um movimento maior,
                            alcançando comunidades e criando oportunidades reais para quem mais precisa.
                        </p>

                        {/* METAS */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-foreground">
                                Nossas Metas
                            </h3>

                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <Check className="h-4 w-4 text-primary mt-1" />
                                    Impactar mais de <strong>5.000 pessoas</strong> nos próximos anos
                                </li>

                                <li className="flex items-start gap-2">
                                    <Check className="h-4 w-4 text-primary mt-1" />
                                    Expandir para <strong>novas comunidades</strong> da região
                                </li>

                                <li className="flex items-start gap-2">
                                    <Check className="h-4 w-4 text-primary mt-1" />
                                    Realizar <strong>projetos contínuos</strong> com impacto real
                                </li>

                                <li className="flex items-start gap-2">
                                    <Check className="h-4 w-4 text-primary mt-1" />
                                    Manter <strong>100% de transparência</strong> com doadores
                                </li>

                                <li className="flex items-start gap-2">
                                    <Check className="h-4 w-4 text-primary mt-1" />
                                    Fortalecer a rede de <strong>voluntários e parceiros</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}