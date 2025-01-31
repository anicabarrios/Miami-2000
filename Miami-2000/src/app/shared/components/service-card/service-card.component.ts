import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() id!: string;

  constructor(private router: Router) {}

  onLearnMore() {
    // Convert title to URL-friendly format
    const serviceId = this.title.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/services', serviceId]);
  }
}