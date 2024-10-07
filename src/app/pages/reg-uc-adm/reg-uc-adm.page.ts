import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-uc-adm',
  templateUrl: './reg-uc-adm.page.html',
  styleUrls: ['./reg-uc-adm.page.scss'],
})
export class RegUcAdmPage implements OnInit {
  conductores = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      correo: 'juan.perez@duoc.cl',
      patente: 'ABC123',
      modelo: 'Corolla',
      marca: 'Toyota'
    },
    {
      nombre: 'María',
      apellido: 'González',
      correo: 'maria.gonzalez@duoc.cl',
      patente: 'XYZ789',
      modelo: 'Civic',
      marca: 'Honda'
    },
  ];
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
