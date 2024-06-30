import { Class, Unity } from "./school"

// Matrícula
export type Registration = {
    id: number,
    pupil: Pupil,
    responsible: Responsible,
    plots: Plot[],
    address: string,
    cellOne: number,
    cellTwo: number
}

// Aluno
export type Pupil = {
    registration: Registration,
    name: string,
    rg: number,
    cpf: number,
    classes: Class[],
    frequency: number,
    unity: Unity,
    cell: number
}

// Responsável
export type Responsible = {
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

