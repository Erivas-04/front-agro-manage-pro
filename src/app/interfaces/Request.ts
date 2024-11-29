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
    is_active: boolean,
    observations: string,
    changePassword: boolean,
    changePasswordNextSession: boolean
}

export interface PutPassword {
    password: string
}

export interface CreateUser {
    username: string, 
    password: string,
    name: string,
    last_name: string,
    role: number,
    tel: string,
    is_active: boolean,
    observations: string,
    changePassword: boolean,
    changePasswordNextSession: boolean
}

export interface CreateCage {
    user: number,
    code: string,
    name: string,
    observations: string,
    hability: boolean
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

export interface AsigAnimalFood {
    animal_food: number,
    animal_food_amount: number
}

export interface AnimalDTO {
    animal_name: string,
    observations: string,
    hability: boolean
}

export interface ConcentrateDTO {
    animal_food_name: string,
    observations: string,
    hability: boolean
}


export interface UnsubscribeAnimalDTO {
    weight: number,
    age: number,
    id_cage: number,
    type_of_movement: number,
    amount: number
}

export interface RemoveAnimalFood {
    id_cage: number,
    type: number,
    amount: number
}