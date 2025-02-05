import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vehicleInfo: string;
  service: string;
  additionalDetails: string;
}

export interface EmailResponse {
  status: number;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly SERVICE_ID = 'service_ztxy5uy';
  private readonly TEMPLATE_ID = 'template_8eg4c5o';
  private readonly PUBLIC_KEY = 'IC555p7Y3JunsIvhe';

  constructor() {
    // Initialize EmailJS with public key
    emailjs.init(this.PUBLIC_KEY);
  }

  sendEmail(formData: ContactFormData): Observable<EmailResponse> {
    const templateParams = {
      to_name: 'Miami 2000 Body Shop',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      vehicle_info: formData.vehicleInfo,
      service: formData.service,
      message: formData.additionalDetails
    };

    return from(emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams
    )).pipe(
      map(response => ({
        status: response.status,
        text: response.text
      })),
      catchError(error => {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email. Please try again later.');
      })
    );
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    return phoneRegex.test(phone);
  }
}