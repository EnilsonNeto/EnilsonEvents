import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
apiUrl = 'https://localhost:5001/api/Evento';

constructor(private http: HttpClient) { }

  getEventos(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.apiUrl);
  }

  getEventosByTema(tema: string): Observable<Evento[]>{
    return this.http.get<Evento[]>(`${this.apiUrl}/${tema}/tema`);
  }

  getEventosById(id: number): Observable<Evento>{
    return this.http.get<Evento>(`${this.apiUrl}/${id}`);
  }

}
