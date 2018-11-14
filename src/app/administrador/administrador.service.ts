import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrador } from './administrador';
import { AdministradorDetail} from './administrador-detail';
import { Observable } from 'rxjs';

const API_URL = 'http://172.24.41.58:8080/s4_Grupos-api/api';
const administradores = '/administradores';
/**
* The service provider for everything related to administradores
*/
@Injectable()
export class AdministradorService {
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    getAdministradores(): Observable<Administrador[]> {
        return this.http.get<Administrador[]>(API_URL + administradores);
    }
    getAdministradorDetail(administradorId): Observable<AdministradorDetail> {
        return this.http.get<AdministradorDetail>(API_URL + administradores + '/' + administradorId);
    }
     /**
    * Creates a new administrador
    * @param administrador The new administrador
    * @returns The administrador with its new id if it was created, false if it wasn't
    */
   createAdministrador(administrador): Observable<AdministradorDetail> {
    return this.http.post<AdministradorDetail>(API_URL + administradores, administrador);
}

}
