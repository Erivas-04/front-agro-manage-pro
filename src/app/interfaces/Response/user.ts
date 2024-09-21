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