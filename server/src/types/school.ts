import { Student, Registration } from "./registration"
import { User } from "./user"

// Turma
export type Class = {
    id: number,
    Registrations: Registration[],
    createdAt: Date,
    beginIn: Date,
    endIn: Date,
    frequency: number,
    unit: Unit,
    guidelines: Guideline,
    teachers: User[]
}

// Pauta
export type Guideline = {
    id: number,
    class: Class,
    student: Student,
    frequency: number
}

//Unidade
export type Unit = {
    id: number,
    name: string,
    Registrations: Registration[],
    employees: User,
    address: string
}

