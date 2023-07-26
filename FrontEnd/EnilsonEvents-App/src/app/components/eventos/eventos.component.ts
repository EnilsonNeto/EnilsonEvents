import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: Evento[] = [];
  eventosFiltrados: Evento[] = [];
  isCollapsed = false;
  private _filter: string = '';

  public get filter(): string{
    return this._filter;
  }

  public set filter(value: string) {
    this._filter = value;
    this.eventosFiltrados = this.filter ? this.filtrarEventos(this.filter) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLowerCase();
    return this.eventos.filter((event: any) =>
      event.tema.toLowerCase().indexOf(filtrarPor) !== -1 ||
      event.local.toLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventoService.getEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos
      },
      error => console.log(error)
    );
  }
}
