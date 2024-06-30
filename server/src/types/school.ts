import { Pupil, Registration } from "./registration"
import { User } from "./user"

// Turma
export type Class = {
    id: number,
    Registrations: Registration[],
    createdAt: Date,
    beginIn: Date,
    endIn: Date,
    frequency: number,
    unity: Unity,
    guidelines: Guideline,
    teachers: User[]
}

// Pauta
export type Guideline = {
    id: number,
    class: Class,
    pupil: Pupil,
    frequency: number
}

//Unidade
export type Unity = {
    id: number,
    name: string,
    Registrations: Registration[],
    employees: User,
    address: string
}

