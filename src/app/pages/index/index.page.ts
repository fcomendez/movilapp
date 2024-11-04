import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa AlertController

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  formularioindex: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private alertController: AlertController // Inyecta AlertController
  ) {
    this.formularioindex = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  async login() {
    const f = this.formularioindex.value;
  
    // Obtener la lista de usuarios del localStorage
    const usuariosString = localStorage.getItem('usuarios');
    const usuarios = usuariosString ? JSON.parse(usuariosString) : []; // Asegúrate de que usuarios sea un array
    
    console.log('Formulario:', f); // Imprimir el formulario
    console.log('Usuarios:', usuarios); // Imprimir los usuarios guardados
  
    // Comprobar credenciales en la lista de usuarios
    const usuarioValido = usuarios.find((usuario: any) => 
      usuario.email === f.email && usuario.contrasena === f.contrasena
    );
  
    if (usuarioValido) {
      console.log('ingresado');
      // Almacena los datos del usuario en el localStorage
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioValido));
      console.log('Usuario logueado:', usuarioValido);
      this.router.navigate(['/index-us']); // Redirigir a index-us
    } else {
      console.log('Credenciales incorrectas');
      await this.mostrarAlerta('Credenciales incorrectas'); // Muestra la alerta
    }
  }

  // Método para mostrar la alerta
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
