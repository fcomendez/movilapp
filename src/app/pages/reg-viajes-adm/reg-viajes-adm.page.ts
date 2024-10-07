import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-viajes-adm',
  templateUrl: './reg-viajes-adm.page.html',
  styleUrls: ['./reg-viajes-adm.page.scss'],
})
export class RegViajesAdmPage implements OnInit {
  viajes = [
    {
      fechaHora: '2024-09-01 14:30',
      lugarSalida: 'Santiago',
      destino: 'Valparaíso',
      valor: 15000
    },
    {
      fechaHora: '2024-09-02 09:00',
      lugarSalida: 'Santiago',
      destino: 'Concepción',
      valor: 20000
    },
    // Más viajes...
  ];
  constructor() { }

  ngOnInit() {
  }

}
