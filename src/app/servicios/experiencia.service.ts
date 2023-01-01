import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
 urlBase= 'http//localhost:8080/experiencia/'
  
 constructor(private httpClient:HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.urlBase + 'lista');
  }

  public verExperiencia(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.urlBase + `ver/${id}`);
  }

  public agregarExperiencia(experiencia: Experiencia) :Observable<any>{
    return this.httpClient.post<any>(this.urlBase + 'crear', experiencia);
  }

  public updateExperiencia(experiencia: Experiencia) :Observable<any>{
    return this.httpClient.put<any>(this.urlBase + 'editar', experiencia);
  }

  public eliminarExperiencia(id: number) :Observable<any>{
    return this.httpClient.delete<any>(this.urlBase + `borrar/${id}`);
  }
}
