import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-about-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './about-contact.component.html',
  styleUrl: './about-contact.component.css',
})
export class AboutContactComponent implements OnInit {
  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  onSend(event: Event) {
    event.preventDefault(); // prevent page refresh

    if (this.myForm.invalid) {
      alert('Please fill all fields correctly.');
      return;
    }

    const { name, email, message } = this.myForm.value;

    emailjs.init('bOV0KjXD1_A1tLeQJ');

    emailjs
      .send('service_hckktvp', 'template_lget1dh', {
        name: name,
        email: email,
        message: message,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          this.myForm.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  }
}
