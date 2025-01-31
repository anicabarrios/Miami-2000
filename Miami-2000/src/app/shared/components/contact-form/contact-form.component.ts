import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Input() title = 'Get Your Free Estimate Today';
  @Input() description = 'Our expert team is ready to help restore your vehicle to its pristine condition. Contact us now for professional consultation.';
  @Input() services: Array<{id: number; title: string}> = [];
}
