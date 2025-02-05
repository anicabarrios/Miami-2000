import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  template: `
    <div class="min-h-screen bg-primary-900 flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="text-9xl font-bold text-secondary-500 mb-4">404</h1>
        <h2 class="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p class="text-primary-200 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <app-button routerLink="/">Return Home</app-button>
      </div>
    </div>
  `
})
export class NotFoundComponent {}