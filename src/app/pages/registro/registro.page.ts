import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required]
    });
  }

  ngOnInit() {}

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  async mostrarAlertaExito(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: mensaje,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/index']); // Redirige a la página de inicio
        }
      }]
    });
    await alert.present();
  }

  async guardar() {
    if (this.registroForm.valid) {
      // Crea el nuevo usuario
      const nuevoUsuario = {
        nombre: this.registroForm.get('nombre')!.value,
        telefono: this.registroForm.get('telefono')!.value,
        email: this.registroForm.get('email')!.value,
        contrasena: this.registroForm.get('contrasena')!.value
      };

      // Obtiene la lista de usuarios del localStorage
      let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

      // Agrega el nuevo usuario a la lista
      usuarios.push(nuevoUsuario);

      // Guarda la lista actualizada en el localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      // Muestra alerta de éxito y redirige
      this.mostrarAlertaExito('Te has registrado correctamente.');
    } else {
      // Verifica cada campo y muestra la alerta correspondiente
      if (this.registroForm.get('nombre')!.invalid) {
        this.mostrarAlerta('El nombre es obligatorio.');
      } else if (this.registroForm.get('telefono')!.invalid) {
        const telefonoControl = this.registroForm.get('telefono');
        if (telefonoControl!.errors?.['required']) {
          this.mostrarAlerta('El número de teléfono es obligatorio.');
        } else if (telefonoControl!.errors?.['pattern']) {
          this.mostrarAlerta('El número de teléfono debe tener entre 9 y 15 dígitos.');
        }
      } else if (this.registroForm.get('email')!.invalid) {
        this.mostrarAlerta('El email es obligatorio y debe ser un correo electrónico válido.');
      } else if (this.registroForm.get('contrasena')!.invalid) {
        const contrasenaControl = this.registroForm.get('contrasena');
        if (contrasenaControl!.errors?.['required']) {
          this.mostrarAlerta('La contraseña es obligatoria.');
        } else if (contrasenaControl!.errors?.['minlength']) {
          this.mostrarAlerta('La contraseña debe tener al menos 6 caracteres.');
        }
      } else if (this.registroForm.get('confirmarContrasena')!.invalid) {
        this.mostrarAlerta('Debes confirmar tu contraseña.');
      } else if (this.registroForm.get('contrasena')!.value !== this.registroForm.get('confirmarContrasena')!.value) {
        this.mostrarAlerta('Las contraseñas no coinciden.');
      }
    }
  }
}
