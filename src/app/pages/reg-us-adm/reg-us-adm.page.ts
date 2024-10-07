import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-us-adm',
  templateUrl: './reg-us-adm.page.html',
  styleUrls: ['./reg-us-adm.page.scss'],
})
export class RegUsAdmPage implements OnInit {
  usuarios = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      correo: 'juan.perez@duoc.cl',
      telefono: '123456789',
      contrasena: 'password123'
    },
    {
      nombre: 'María',
      apellido: 'González',
      correo: 'maria.gonzalez@duoc.cl',
      telefono: '987654321',
      contrasena: 'mypassword'
    },
    // Más usuarios...
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
