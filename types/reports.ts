type ExpenseCategory = {
    icon: React.ElementType
    name: string
    amount: number
    description: string
}

type ProjectReport = {
    id: number
    title: string
    totalInvestment: number
    period: string
    status: string
    expenses: ExpenseCategory[]
}