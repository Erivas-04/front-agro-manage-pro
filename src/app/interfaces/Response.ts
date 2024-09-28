export interface Access {
    token: string,
    asig: number
}

export interface Message {
    message: string
}

export interface CompanyResponse {
    id: number,
    hability: boolean,
    company_name: string,
    address: string, 
    nit: string,
    owner: string,
    usernameExtension: string,
    tel: string,
    observations: string,
    department: string,
    state: string
}

export interface User {
    id: number,
    username: string,
    firstname: string,
    lastname: string,
    country: string,
    tel: string,
    role: string,
    hability: boolean,
    changePassword: boolean,
    changePasswordNextSession: boolean
}

export interface Cage {
    id: number,
    user: number,
    animal_name: string,
    concentrate_name: string,
    code: string,
    name: string,
    active: boolean,
    observations: string,
    feedconcentrate: number,
    feedanimal: number
}

export interface Animal {
    id: number,
    id_user: number,
    animal_name: string,
    observations: string,
    hability: boolean
}

export interface Concentrate {
    id: number,
    concentrate_name: string,
    hability: boolean,
    observations: string
}
