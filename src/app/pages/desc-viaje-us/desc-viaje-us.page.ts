import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
@Component({
  selector: 'app-desc-viaje-us',
  templateUrl: './desc-viaje-us.page.html',
  styleUrls: ['./desc-viaje-us.page.scss'],
})
export class DescViajeUsPage implements OnInit {
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
        this.router.navigate(['/solicitud-us']);
      },
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
