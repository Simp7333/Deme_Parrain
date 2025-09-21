
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class AuthFormComponent {
  @Input() formTitle = '';
  @Input() formGroup!: FormGroup;
  @Input() fields: Array<{ type: string; placeholder: string; formControlName: string; inputType?: string }>=[];
  @Input() submitLabel = 'Valider';
  @Input() errorMessages: { [key: string]: string } = {};
  @Output() submitForm = new EventEmitter<void>();

  isInvalid(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return !!(control && control.invalid && control.touched);
  }
}
