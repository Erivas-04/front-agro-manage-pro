export interface PutUser {
    username: string,
    firstname: string,
    lastname: string,
    tel: string,
    hability: boolean,
    changePassword: boolean,
    changePasswordNextSession: boolean
}

export interface CreateUser {
    id_asig: number,
    username: string, 
    password: string,
    firstname: string,
    lastname: string,
    tel: string,
    hability: boolean,
    changePassword: boolean,
    changePasswordNextSession: boolean
}