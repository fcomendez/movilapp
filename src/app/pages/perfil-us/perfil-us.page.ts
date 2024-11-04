import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-perfil-us',
  templateUrl: './perfil-us.page.html',
  styleUrls: ['./perfil-us.page.scss'],
})
export class PerfilUsPage implements OnInit {

  usuario: any; // Definimos una variable para almacenar los datos del usuario

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'si',
      cssClass: 'alert-button-confirm',
      handler: () => {
        // Redirigir a la página /index-us cuando se presiona "Yes"
        localStorage.removeItem('usuarioLogueado');
        this.router.navigate(['/index']);
      },
    },
  ];

  constructor(private router: Router) { } // Inyectar el Router en el constructor

  ngOnInit() {
    const usuarioString = localStorage.getItem('usuarioLogueado');
    this.usuario = usuarioString ? JSON.parse(usuarioString) : null; // Asegúrate de que usuario sea un objeto
    console.log('Usuario recuperado:', this.usuario); // Verifica que los datos se están recuperando
  }
  
}
