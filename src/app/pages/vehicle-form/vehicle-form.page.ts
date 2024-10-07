import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.page.html',
  styleUrls: ['./vehicle-form.page.scss'],
})
export class VehicleFormPage implements OnInit {

  vehicleForm: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    // Inicializamos el formulario en el constructor
    this.vehicleForm = this.fb.group({
      name: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      licenseExpiry: ['', Validators.required],
      vehicleBrand: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      vehicleYear: ['', [Validators.required, Validators.min(2000), Validators.max(new Date().getFullYear())]],
    });
  }

  ngOnInit() {
    // Aquí no es necesario inicializar el formulario de nuevo
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      console.log('Formulario enviado:', this.vehicleForm.value);
      this.navCtrl.navigateForward('/verificacion-uc');
      // Aquí puedes manejar los datos enviados, como enviarlos a un servidor o guardarlos localmente
    }
  }
}