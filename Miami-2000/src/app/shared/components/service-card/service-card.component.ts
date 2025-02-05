import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { ViewportScroller } from '@angular/common';

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

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  getServiceId(): string {
    return this.title.toLowerCase().replace(/\s+/g, '-');
  }

  onLearnMore() {
    const serviceId = this.getServiceId();
    
    this.router.navigate(['/services']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(serviceId);
        if (element) {
          const headerHeight = 80;
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.scrollY;
          const scrollPosition = absoluteElementTop - headerHeight;

          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });

          // Add highlight effect
          element.classList.add('highlight-service');
          setTimeout(() => {
            element.classList.remove('highlight-service');
          }, 2000);
        }
      }, 100);
    });
  }
}