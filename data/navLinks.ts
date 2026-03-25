type NavLink = {
    label: string
    href: string
    type: "link" | "scroll"
}

const navLinks: NavLink[] = [
    { label: "Relatos", href: "/relatos", type: "link" },
    { label: "Doadores", href: "#sponsors", type: "scroll" },
    { label: "Entidades Atendidas", href: "/projetos", type: "link" },
    { label: "Documentos", href: "/documentos", type: "link" },
    { label: "Contato", href: "#footer", type: "scroll" },
]

export default navLinks