export interface CompanyRequest {
    company_name: string,
    address: string,
    nit: string,
    owner: string,
    tel: string, 
    observations: string,
    deparment: string,
    state: string,
    hability: boolean
}

export interface Login {
    username: string,
    password: string
}

export interface PutUser {
    username: string,
    firstname: string,
    lastname: string,
    tel: string,
    hability: boolean,
    changePassword: boolean,
    changePasswordNextSession: boolean
}

export interface PutPassword {
    password: string
}

export interface CreateUser {
    id_asig: number,
    username: string, 
    password: string,
    firstname: string,
    lastname: string,
    role: number,
    tel: string,
    hability: boolean,
    changePassword: boolean,
    changePasswordNextSession: boolean
}

export interface CreateCage {
    user: number,
    code: string,
    name: string,
    observations: string,
    active: boolean
}


export interface PutCage {
    code: string,
    name: string,
    active: boolean,
    observations: string
}

export interface AsigAnimal {
    animal: number,
    animal_amount: number,
}

export interface AnimalDTO {
    animal_name: string,
    observations: string,
    hability: boolean
}

export interface ConcentrateDTO {
    concentrate_name: string,
    observations: string,
    hability: boolean
}