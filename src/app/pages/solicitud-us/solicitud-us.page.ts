import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-solicitud-us',
  templateUrl: './solicitud-us.page.html',
  styleUrls: ['./solicitud-us.page.scss'],
})
export class SolicitudUsPage implements OnInit {
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
        this.router.navigate(['/index-us']);
      },
    },
  ];

  constructor(private router: Router) { } // Inyectar el Router en el constructor

  ngOnInit() { }
}
