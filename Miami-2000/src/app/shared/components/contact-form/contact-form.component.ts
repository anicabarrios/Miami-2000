// src/app/shared/components/contact-form/contact-form.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { EmailService } from '../../../core/services/email.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() title = 'Get Your Free Estimate Today';
  @Input() description = 'Our expert team is ready to help restore your vehicle to its pristine condition. Contact us now for professional consultation.';
  @Input() services: Array<{id: number; title: string}> = [];

  contactForm!: FormGroup;
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initializeForm();
    
    // Check for service parameter in URL
    this.route.queryParams.subscribe(params => {
      if (params['service']) {
        const serviceTitle = this.services.find(s => 
          s.title.toLowerCase().replace(/\s+/g, '-') === params['service']
        )?.title;
        if (serviceTitle) {
          this.contactForm.patchValue({ service: serviceTitle });
        }
      }
    });
  }

  private initializeForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[\\d\\s-()]{10,}$')]],
      vehicleInfo: ['', [Validators.required]],
      service: ['', [Validators.required]],
      additionalDetails: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitStatus = 'idle';
      this.errorMessage = '';

      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitStatus = 'success';
          this.contactForm.reset();
          
          // Reset form to initial state after 5 seconds
          setTimeout(() => {
            this.submitStatus = 'idle';
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitStatus = 'error';
          this.errorMessage = error.message || 'An error occurred while sending your message. Please try again.';
        }
      });
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (!control || !control.errors) return '';

    const errors = control.errors;
    if (errors['required']) return `${fieldName} is required`;
    if (errors['email']) return 'Please enter a valid email address';
    if (errors['minlength']) return `${fieldName} must be at least ${errors['minlength'].requiredLength} characters`;
    if (errors['pattern']) return 'Please enter a valid phone number';
    
    return 'Invalid input';
  }
}