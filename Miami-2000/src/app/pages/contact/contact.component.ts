
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { FooterComponent } from "../../features/components/footer/footer.component";
import { HeaderComponent } from '../../features/components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, FooterComponent, HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  services = [
    { id: 1, title: 'Collision Repair' },
    { id: 2, title: 'Paint Services' },
    { id: 3, title: 'Dent Removal' },
    { id: 4, title: 'Frame Repair' },
    { id: 5, title: 'Glass Replacement' },
    { id: 6, title: 'Auto Restoration' },
    { id: 7, title: 'Custom Paint Work' },
    { id: 8, title: 'Classic Car Restoration' },
    { id: 9, title: 'Custom Body Work' },
    { id: 10, title: 'Frame & Structural Repair' },
    { id: 11, title: 'Interior Detailing' },
    { id: 12, title: 'Paint Protection' },
    { id: 13, title: 'Window Tinting' }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    // Set page title and meta tags
    this.title.setTitle('Contact Us - Miami 2000 Body Shop');
    this.meta.updateTag({ name: 'description', content: 'Contact Miami 2000 Body Shop for professional auto body repair services. Get a free estimate for collision repair, paint services, and more.' });

    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        throttleDelay: 50,
        offset: 100,
        disable: false,
        startEvent: 'DOMContentLoaded',
        anchorPlacement: 'top-bottom',
        useClassNames: true,
        disableMutationObserver: false,
      });

      this.setupAOSRefresh();
    }
  }

  private setupAOSRefresh() {
    // Refresh on initial load
    window.addEventListener('load', () => {
      AOS.refresh();
    });

    // Refresh on dynamic content changes
    const observer = new MutationObserver(() => {
      AOS.refresh();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Refresh on window resize with debounce
    let resizeTimeout: any;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 250);
    });
  }
}