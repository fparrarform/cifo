import { users } from '../interfaces/users.interface'

export class Users implements users {
    "name": string;
    "password": string;
    "email": string;
    "direccion": string;
    "telefono": number;
}