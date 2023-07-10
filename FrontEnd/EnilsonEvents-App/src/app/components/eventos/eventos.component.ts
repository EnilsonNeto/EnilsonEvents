import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: any = [];
  isCollapsed = false;
  eventosFiltrados: any = [];
  private _filter: string = '';

  public get filter(): string{
    return this._filter;
  }

  public set filter(value: string) {
    this._filter = value;
    this.eventosFiltrados = this.filter ? this.filtrarEventos(this.filter) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLowerCase();
    return this.eventos.filter((event: any) =>
      event.tema.toLowerCase().indexOf(filtrarPor) !== -1 ||
      event.local.toLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.http.get('https://localhost:5001/api/Evento').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos
      },
      error => console.log(error)
    );
  }
}
