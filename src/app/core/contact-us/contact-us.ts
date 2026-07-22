import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kka-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUsComponent {

  private fb = inject(FormBuilder);

  contactForm = this.fb.group({

    name: ['', Validators.required],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    message: ['', [
      Validators.required,
      Validators.minLength(10)
    ]]

  });

  submitForm() {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log(this.contactForm.value);

  }

}