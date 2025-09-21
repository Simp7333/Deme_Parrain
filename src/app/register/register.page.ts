import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, AppFooterComponent, AppHeaderComponent, AuthFormComponent]
})
export class RegisterPage {
  registerForm: FormGroup;
  registerFields = [
    { type: 'input', placeholder: 'Votre nom', formControlName: 'nom' },
    { type: 'input', placeholder: 'Votre prénom', formControlName: 'prenom' },
    { type: 'input', placeholder: 'votremail@gmail.com', formControlName: 'email', inputType: 'email' },
    { type: 'input', placeholder: 'Profession', formControlName: 'profession' },
    { type: 'input', placeholder: 'Votre pays', formControlName: 'pays' },
    { type: 'input', placeholder: 'Indicatif', formControlName: 'indicatif' },
    { type: 'input', placeholder: 'Votre numéro de téléphone', formControlName: 'telephone', inputType: 'tel' },
    { type: 'input', placeholder: 'Votre mot de passe', formControlName: 'password', inputType: 'password' },
    { type: 'input', placeholder: 'Confirmer le mot de passe', formControlName: 'confirmPassword', inputType: 'password' },
  ];
  registerErrors = {
    nom: 'Le nom est obligatoire.',
    prenom: 'Le prénom est obligatoire.',
    email: 'Entrez un email valide.',
    profession: 'Sélectionnez votre profession.',
    pays: 'Sélectionnez votre pays',
    indicatif: 'Sélectionnez un indicatif',
    telephone: 'Numéro de téléphone obligatoire.',
    password: 'Mot de passe obligatoire (min. 6 caractères).',
    confirmPassword: 'Confirmation obligatoire.'
  };

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profession: ['', Validators.required],
      pays: ['', Validators.required],
      indicatif: ['+223', Validators.required],
      telephone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  get passwordMismatch(): boolean {
    const pwd = this.registerForm.get('password')?.value;
    const confirm = this.registerForm.get('confirmPassword')?.value;
    const touched = this.registerForm.get('confirmPassword')?.touched;
    return !!(pwd !== confirm && touched);
  }

  isInvalid(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }

  async onRegister() {
    if (this.registerForm.valid && !this.passwordMismatch) {
      const data = this.registerForm.value;
      console.log('📌 Données du formulaire :', data);

      const alert = await this.alertCtrl.create({
        header: 'Succès',
        message: `Inscription réussie pour <b>${data.prenom} ${data.nom}</b> !`,
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      this.registerForm.markAllAsTouched();

      const alert = await this.alertCtrl.create({
        header: 'Erreur',
        message: 'Veuillez corriger les erreurs avant de continuer.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
