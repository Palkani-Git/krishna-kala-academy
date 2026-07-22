import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'kka-registration',
  imports: [    CommonModule,
    ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class RegistrationComponent {
  private fb = inject(FormBuilder);

  registrationForm = this.fb.group({

    candidateName: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],

    mobileNumber: ['', [
      Validators.required,
      Validators.pattern(/^[6-9]\d{9}$/)
    ]],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    activity: ['', Validators.required],

    address: [''],

    notes: ['']

  });

  activities = [

    'Bharatanatyam',

    'Silambam',

    'Yoga',

    'Krishna Bhajans',

    'Classical Dance'

  ];

  submitRegistration() {

    if (this.registrationForm.invalid) {

      this.registrationForm.markAllAsTouched();

      return;

    }

    console.log(this.registrationForm.value);

    alert('Registration Submitted Successfully');

    this.registrationForm.reset();

  }

}