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
    observations: string,
    tel: string,
    role: string,
    is_active: boolean,
    changePassword: boolean,
    changePasswordNextSession: boolean
}

export interface AnimalAsigned {
    animalId: number,
    animalName: string,
    animalAmount: number
}

export interface ConcentrateAsigned {
    concentrateId: number, 
    concentrateName : string,
    concentrateAmount: number
}

export interface Cage {
    id: number,
    concentrateAsigned: ConcentrateAsigned,
    animalAsigned: AnimalAsigned,
    code: string,
    name: string,
    active: boolean,
    observations: string
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

export interface MovementCageView {
    user_name: string, 
    cage_code: string,
    cage_name: string,
    movement_type: string,
    animalOrAnimalFood: string,
    amount: number,
    age: number,
    weigth: number,
    time: String
}
