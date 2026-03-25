"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Documentos() {

    const documents = [
        {
            name: "Estatuto Social",
            file: "/docs/estatuto.pdf",
        },
        {
            name: "Ata de Fundação",
            file: "/docs/ata-fundacao.pdf",
        },
        {
            name: "Cartão CNPJ",
            file: "/docs/cnpj.pdf",
        },
    ]

    return (
        <>
            <Header />

            <main className="min-h-screen bg-background pt-20">

                <section className="bg-primary py-16 text-primary-foreground">
                    <div className="mx-auto max-w-6xl px-4 text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                            Documentos
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg opacity-90">
                            Transparência e legalidade são pilares da nossa atuação.
                            Aqui você encontra nossos documentos oficiais.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="mx-auto max-w-4xl px-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Dados da Organização</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm sm:text-base">
                                <p><strong>Razão Social:</strong> Associação Amo Tudo Isso Muito</p>
                                <p><strong>Nome Fantasia:</strong> ATIM</p>
                                <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
                                <p><strong>Endereço:</strong> Taubaté - SP</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="pb-20">
                    <div className="mx-auto max-w-4xl px-4">

                        <h2 className="mb-8 text-center text-2xl font-bold">
                            Documentos Oficiais
                        </h2>

                        <div className="space-y-4">
                            {documents.map((doc, index) => (
                                <Card key={index} className="flex items-center justify-between p-4">

                                    <div className="flex items-center gap-3">
                                        <FileText className="h-5 w-5 text-primary" />
                                        <span className="font-medium">
                                            {doc.name}
                                        </span>
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => window.open(doc.file, "_blank")}
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        Ver
                                    </Button>

                                </Card>
                            ))}
                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}