import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const featuredProjects = [
  {
    id: 1,
    title: "Reforma da Escola Esperança",
    description:
      "Transformamos completamente a Escola Esperança, beneficiando mais de 200 crianças com salas de aula renovadas e biblioteca moderna.",
    image: "/images/project-1-after-1.jpg",
  },
  {
    id: 2,
    title: "Horta Comunitária Vila Nova",
    description:
      "Implantamos uma horta comunitária que alimenta mais de 50 famílias e oferece oficinas de agricultura sustentável.",
    image: "/images/project-2-after-1.jpg",
  },
  {
    id: 3,
    title: "Centro de Capacitação Profissional",
    description:
      "Centro que já formou mais de 300 jovens em cursos de informática, costura e gastronomia.",
    image: "/images/project-3-after-1.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Nossos Projetos
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Conheça algumas das transformações que realizamos em nossa comunidade.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 bg-card shadow-lg transition-shadow hover:shadow-xl">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/projetos">
              Ver Todos os Projetos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
