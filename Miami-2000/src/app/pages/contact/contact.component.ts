// contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { FooterComponent } from "../../features/components/footer/footer.component";
import { HeaderComponent } from '../../features/components/header/header.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, FooterComponent, HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  services = [
    { id: 1, title: 'Collision Repair' },
    { id: 2, title: 'Paint Services' },
    { id: 3, title: 'Dent Removal' },
    { id: 4, title: 'Frame Repair' },
    { id: 5, title: 'Glass Replacement' },
    { id: 6, title: 'Auto Restoration' },
    { id: 7, title: 'Custom Paint Work' }
  ];
}