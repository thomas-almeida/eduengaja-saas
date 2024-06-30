import { Unity } from "./school"

// Usuário
export type User = {
    id: number,
    name: string,
    password: string,
    unity: Unity,
    role: Role
}

// Cargo
export type Role = {
    id: number,
    name: string,
    canAccess: string[]
}

