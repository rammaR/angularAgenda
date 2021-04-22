export interface User {
    name: string,
    email: string,
    secondEmail?: string,
    added: string,
    avatar?: any,
    role?: string,
    department?: string
}

export function __CreateUser(): User {
    return {
        added: '',
        email: null,
        name: null,
        avatar: null,
        department: null,
        role: null,
        secondEmail: null,
    }
}