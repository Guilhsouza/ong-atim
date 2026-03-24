"use client"

import { useState } from "react"
import {
    FileText,
    DollarSign,
    ChevronDown,
    ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import projectReports from "@/data/reports"

function formatCurrency(value: number): string {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

function ProjectExpenseCard({ report }: { report: ProjectReport }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const totalExpenses = report.expenses.reduce((sum, exp) => sum + exp.amount, 0)

    return (
        <Card className="overflow-hidden border-0 bg-card shadow-lg">
            <CardHeader
                className="cursor-pointer transition-colors hover:bg-secondary/50"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-medium ${report.status === "Concluído"
                                    ? "bg-green-400/70 text-primary"
                                    : "bg-lime-300/70 text-primary"
                                    }`}
                            >
                                {report.status}
                            </span>
                            <span className="text-xs text-muted-foreground">{report.period}</span>
                        </div>
                        <CardTitle className="text-lg text-foreground sm:text-xl">{report.title}</CardTitle>
                        <CardDescription className="mt-2 flex items-center gap-2 text-base font-semibold text-primary sm:text-lg">
                            <DollarSign className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                            <span className="break-all">{formatCurrency(report.totalInvestment)}</span>
                        </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                        {isExpanded ? (
                            <ChevronUp className="h-5 w-5" />
                        ) : (
                            <ChevronDown className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </CardHeader>

            {isExpanded && (
                <CardContent className="border-t border-border pt-6">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="font-semibold text-foreground">Detalhamento de Gastos</h4>
                    </div>

                    <div className="space-y-3">
                        {report.expenses.map((expense, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-secondary/50 p-3 sm:p-4"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-10 sm:w-10">
                                        <expense.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
                                            <div className="min-w-0 flex-1">
                                                <p className="font-medium text-foreground">{expense.name}</p>
                                                <p className="text-xs text-muted-foreground sm:text-sm">{expense.description}</p>
                                            </div>
                                            <p className="text-sm font-semibold text-foreground sm:shrink-0 sm:text-base">
                                                {formatCurrency(expense.amount)}
                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <div className="h-2 overflow-hidden rounded-full bg-border">
                                                <div
                                                    className="h-full bg-primary transition-all"
                                                    style={{ width: `${(expense.amount / report.totalInvestment) * 100}%` }}
                                                />
                                            </div>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {((expense.amount / report.totalInvestment) * 100).toFixed(1)}% do total
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col items-start justify-between gap-2 rounded-lg bg-primary/10 p-4 sm:flex-row sm:items-center">
                        <span className="font-semibold text-foreground">Total Comprovado</span>
                        <span className="text-base font-bold text-primary sm:text-lg">{formatCurrency(totalExpenses)}</span>
                    </div>

                    {totalExpenses === report.totalInvestment && (
                        <p className="mt-3 flex items-center gap-2 text-sm text-primary">
                            <FileText className="h-4 w-4 shrink-0" />
                            100% dos recursos foram prestados conta
                        </p>
                    )}
                </CardContent>
            )}
        </Card>
    )
}

export default function RelatoriosPage() {
    const totalInvested = projectReports.reduce((sum, p) => sum + p.totalInvestment, 0)
    const completedProjects = projectReports.filter(p => p.status === "Concluído").length

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-20">

                <section className="bg-primary py-16 text-primary-foreground">
                    <div className="mx-auto max-w-6xl px-4 text-center">
                        <h1 className="mb-4 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
                            Transparência e Prestação de Contas
                        </h1>
                        <p className="mx-auto max-w-2xl text-pretty text-base opacity-90 sm:text-lg">
                            Acreditamos que a transparência é fundamental para construir confiança.
                            Aqui você encontra o detalhamento completo de todos os gastos realizados em nossos projetos.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="border-b border-border bg-card py-8 sm:py-12">
                    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-4 sm:gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary sm:text-3xl">{projectReports.length}</p>
                            <p className="text-xs text-muted-foreground sm:text-sm">Projetos Documentados</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-bold text-primary sm:text-2xl md:text-3xl">
                                <span className="block text-xs font-normal text-muted-foreground sm:hidden">Total</span>
                                <span className="hidden sm:inline">{formatCurrency(totalInvested)}</span>
                                <span className="sm:hidden">{(totalInvested / 1000).toFixed(0)}k</span>
                            </p>
                            <p className="text-xs text-muted-foreground sm:text-sm">
                                <span className="hidden sm:inline">Total Investido</span>
                                <span className="sm:hidden">R$ Investido</span>
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary sm:text-3xl">{completedProjects}</p>
                            <p className="text-xs text-muted-foreground sm:text-sm">Projetos Concluídos</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary sm:text-3xl">100%</p>
                            <p className="text-xs text-muted-foreground sm:text-sm">Prestação de Contas</p>
                        </div>
                    </div>
                </section>

                <section className="bg-secondary py-4 sm:py-6">
                    <div className="mx-auto max-w-6xl px-4 text-center">
                        <div className="flex items-center justify-center gap-3">
                            <FileText className="h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6" />
                            <p className="text-xs sm:text-sm">
                                Clique em cada projeto para ver o detalhamento completo dos gastos
                            </p>
                        </div>
                    </div>
                </section>

                {/* Reports List */}
                <section className="py-8 sm:py-16">
                    <div className="mx-auto max-w-4xl px-4">
                        <div className="space-y-4 sm:space-y-6">
                            {projectReports.map((report) => (
                                <ProjectExpenseCard key={report.id} report={report} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-secondary py-12 sm:py-16">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h2 className="mb-4 text-balance text-2xl font-bold text-foreground sm:text-3xl">
                            Dúvidas sobre nossas contas?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
                            Estamos sempre disponíveis para esclarecer qualquer dúvida sobre a aplicação dos recursos.
                            Entre em contato conosco ou agende uma visita à nossa sede.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto"
                                onClick={() => {
                                    window.location.href = "/#contact"
                                }}
                            >
                                Entre em Contato
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto"
                                onClick={() => {
                                    window.location.href = "/projetos"
                                }}
                            >
                                Ver Projetos
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
