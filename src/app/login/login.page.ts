import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, AppHeaderComponent, AppFooterComponent, AuthFormComponent],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginForm: FormGroup;
  loginFields = [
    { type: 'input', placeholder: 'Votre email', formControlName: 'email', inputType: 'email' },
    { type: 'input', placeholder: 'Votre mot de passe', formControlName: 'password', inputType: 'password' },
  ];
  loginErrors = {
    email: 'Email obligatoire.',
    password: 'Mot de passe obligatoire.'
  };

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      const alert = await this.alertCtrl.create({
        header: 'Connexion',
        message: `Bienvenue <b>${data.email}</b> !`,
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      this.loginForm.markAllAsTouched();
      const alert = await this.alertCtrl.create({
        header: 'Erreur',
        message: 'Veuillez remplir tous les champs correctement.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
