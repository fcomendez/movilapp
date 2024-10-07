import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-perfil-us',
  templateUrl: './perfil-us.page.html',
  styleUrls: ['./perfil-us.page.scss'],
})
export class PerfilUsPage implements OnInit {
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
        this.router.navigate(['/index']);
      },
    },
  ];

  constructor(private router: Router) { } // Inyectar el Router en el constructor

  ngOnInit() {
  }

}
