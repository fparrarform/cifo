import { users } from '../interfaces/users.interface'

export class Restaurant implements users {
    'id': string;
    'name': string;
    'email': string;
    // 'activo': string;    
    'direccion': string;
    'poblacion': string;
    'telefono': string;
    'website': string;
    'photo': any;
    'categoria': string;
    'descripcion': string

    // // 'comida': Array<object> [
    // //     {'plato': string}
    // //     {'precio': number}
    // // ]
    // 'horario': string;
    // 'precioMedio': string;
}

