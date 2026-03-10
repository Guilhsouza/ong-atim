"use client"

import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Building2,
  Users,
  FileText,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const quickLinks = [
  {
    icon: Heart,
    title: "Seja um Padrinho",
    description: "Apadrinhe uma criança ou projeto",
    href: "#",
  },
  {
    icon: Building2,
    title: "Pessoa Jurídica",
    description: "Parcerias corporativas e doações",
    href: "#",
  },
  {
    icon: Users,
    title: "Voluntariado",
    description: "Doe seu tempo e talento",
    href: "#",
  },
  {
    icon: FileText,
    title: "Transparência",
    description: "Relatórios e prestação de contas",
    href: "/relatorios",
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Entre em Contato</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Input
                  type="tel"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              <Textarea
                placeholder="Sua mensagem"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button type="submit" variant="secondary" size="lg" className="w-full cursor-pointer sm:w-auto">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <h2 className="mb-6 text-2xl font-bold">Informações</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <a href="mailto:contato@esperancaviva.org.br" className="text-primary-foreground/80 hover:underline">
                    contato@atim.org.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <a href="tel:+5511999999999" className="text-primary-foreground/80 hover:underline">
                    (11) 99999-9999
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-primary-foreground/80">
                    Rua XPTO, 123 - Centro
                    <br />
                    Taubaté - SP, 01000-000
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Card
              key={link.title}
              className="border-primary-foreground/10 bg-primary-foreground/5 transition-colors hover:bg-primary-foreground/10"
            >
              <a href={link.href} className="block p-4">
                <CardHeader className="flex flex-row items-center gap-3 p-0">
                  <link.icon className="h-6 w-6 text-primary-foreground" />
                  <CardTitle className="text-base text-primary-foreground">{link.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-2">
                  <CardDescription className="text-sm text-primary-foreground/70">
                    {link.description}
                  </CardDescription>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-medium">ONG ATIM - Amo Tudo Isso Muito</p>
              <p className="text-sm text-primary-foreground/70">CNPJ: 00.000.000/0001-00</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-primary-foreground hover:underline">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground hover:underline">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary-foreground hover:underline">
                Estatuto Social
              </a>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-primary-foreground/60">
            2026 ONG ATIM - Amo Tudo Isso Muito. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
