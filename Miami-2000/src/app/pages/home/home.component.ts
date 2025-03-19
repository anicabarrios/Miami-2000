import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../features/components/header/header.component';
import { HeroComponent } from '../../features/components/hero/hero.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FooterComponent } from '../../features/components/footer/footer.component';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { GalleryGridComponent } from '../../shared/components/gallery-grid/gallery-grid.component'; 
import { InsuranceBannerComponent } from '../../features/components/insurance-banner/insurance-banner.component';
import AOS from 'aos';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  stats: {
    value: string;
    label: string;
  };
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    HeroComponent,
    ServiceCardComponent,
    InsuranceBannerComponent,
    ContactFormComponent,
    FooterComponent, 
    GalleryGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})

export class HomeComponent implements OnInit {
  services: ServiceCard[] = [
    {
      id: 'collision-repair',
      title: 'Insurance-Approved Collision Repair',
      description: 'Expert repair services for vehicles involved in accidents, working with all major insurance providers. We handle your claims process seamlessly.',
      imageUrl: '/images/collision1.webp'
    },
    {
      id: 'paint-services',
      title: 'Paint Services',
      description: 'Professional auto painting services including custom colors and perfect color matching.',
      imageUrl: '/images/paintcustom.webp'
    },
    {
      id: 'dent-removal',
      title: 'Dent Removal',
      description: 'Paintless dent repair and traditional dent removal services for all vehicle types.',
      imageUrl: '/images/dent.webp'
    },
    {
      id: 'frame-repair',
      title: 'Frame Repair',
      description: 'Precise frame straightening and structural repair services using modern equipment.',
      imageUrl: '/images/frame.webp'
    },
    {
      id: 'glass-replacement',
      title: 'Glass Replacement',
      description: 'Windshield and auto glass replacement services with quality materials.',
      imageUrl: 'images/glass1.webp'
    },
    {
      id: 'auto-restoration',
      title: 'Auto Restoration',
      description: 'Classic car restoration and custom vehicle modification services.',
      imageUrl: 'images/classic1.webp'
    }
  ];
  formServices = [
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
  features = [
    {
      id: 1,
      title: 'Expert Team',
      description: 'Our certified technicians bring decades of combined experience in advanced repair techniques.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      id: 2,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with industry-leading warranties and satisfaction guarantees.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 3,
      title: 'Modern Technology',
      description: 'State-of-the-art equipment and techniques for precise repairs and perfect finishes.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      id: 4,
      title: 'Fast Turnaround',
      description: 'Efficient service delivery without compromising on quality or attention to detail.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  galleryImages = [
    {
      id: 1,
      url: '/images/classic.webp',
      title: 'Classic Restoration',
      category: 'Full Restoration'
    },
    {
      id: 2,
      url: '/images/collision1.webp',
      title: 'Collision Repair',
      category: 'Accident Recovery'
    },
    {
      id: 3,
      url: '/images/paint2.webp',
      title: 'Custom Paint Job',
      category: 'Paint Services'
    },
    {
      id: 4,
      url: '/images/restore.webp',
      title: 'Luxury Car Detail',
      category: 'Detail Work'
    },
    {
      id: 5,
      url: '/images/frame.webp',
      title: 'Frame Repair',
      category: 'Structural Work'
    },
    {
      id: 6,
      url: '/images/vintage.webp',
      title: 'Vintage Car Restoration',
      category: 'Full Restoration'
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Business Owner',
      content: 'Incredible service! They restored my classic car to better than new condition. The attention to detail was outstanding.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Professional Driver',
      content: 'After a serious accident, they restored my car perfectly. The team was professional and kept me updated throughout.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Car Enthusiast',
      content: 'The paint matching was perfect, and the dent repair is invisible. These guys are true craftsmen.',
      rating: 5
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false, 
        mirror: true, 
        
        // Performance Optimizations
        throttleDelay: 50,
        offset: 100, 
        
        // Mobile Optimizations
        disable: false, 
        startEvent: 'DOMContentLoaded',
        
        // Advanced Settings
        anchorPlacement: 'top-bottom',
        useClassNames: true,
        disableMutationObserver: false,
        
      
      });

      // Refresh AOS on dynamic content changes
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

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Refresh on window resize
    let resizeTimeout: any;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 250);
    });
  }

  // Custom animation helper for dynamic animations
  getAOSAnimation(index: number): string {
    const animations = [
      'fade-up',
      'fade-down',
      'fade-right',
      'fade-left',
      'zoom-in',
      'zoom-in-up'
    ];
    return animations[index % animations.length];
  }

  // Get animation delay based on index
  getAOSDelay(index: number): number {
    return index * 100; // 100ms delay between each item
  }

  // Form handling methods
  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
  }
}