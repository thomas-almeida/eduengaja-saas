import { Class, Unit } from "./school"

// Matrícula
export type Registration = {
    id: number,
    student: Student,
    guardian: Guardian,
    plots: Plot[],
    address: string,
    cellOne: number,
    cellTwo: number
}

// Aluno
export type Student = {
    registration: Registration,
    name: string,
    rg: number,
    cpf: number,
    classes: Class[],
    frequency: number,
    unit: Unit,
    cell: number
}

// Responsável
export type Guardian = {
    name: string,
    rg: number,
    cpf: number,
    filiation: string,
    cell: number
}

// Parcela/Mensalidade
export type Plot = {
    id: number,
    issueDate: Date,
    dueDate: Date,
    status: string,
    sending: string
}

