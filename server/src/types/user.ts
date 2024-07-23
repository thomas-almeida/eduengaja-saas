import { Unit } from "./school"

// Usuário
export type User = {
    id: number,
    name: string,
    password: string,
    unitId: number,
    roleId: number
}

// Cargo
export type Role = {
    id: number,
    name: string,
    canAccess: string[]
}

