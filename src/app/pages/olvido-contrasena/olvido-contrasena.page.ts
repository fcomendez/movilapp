import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olvido-contrasena',
  templateUrl: './olvido-contrasena.page.html',
  styleUrls: ['./olvido-contrasena.page.scss'],
})
export class OlvidoContrasenaPage {
  step: number = 1; // Variable para controlar el paso en el que está el usuario

  constructor() {}

  // Función para pasar al siguiente paso
  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  // Función para simular el guardado de la contrasena
  savePassword() {
    console.log('Contrasena guardada');
    // Aquí podrías mostrar un mensaje de éxito o redirigir al usuario
  }
}