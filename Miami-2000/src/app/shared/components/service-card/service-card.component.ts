import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
}