import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-edit-perf-us',
  templateUrl: './edit-perf-us.page.html',
  styleUrls: ['./edit-perf-us.page.scss'],
})
export class EditPerfUsPage implements OnInit {
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
        this.router.navigate(['/perfil-us']);
      },
    },
  ];

  constructor(private router: Router) { } // Inyectar el Router en el constructor

  ngOnInit() {
  }

}
