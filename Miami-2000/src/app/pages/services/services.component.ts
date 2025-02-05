import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../features/components/header/header.component';
import { FooterComponent } from '../../features/components/footer/footer.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ActivatedRoute, Router } from '@angular/router';
import AOS from 'aos';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  estimatedTime: string;
  category: string;
  elementId?: string;
}


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ButtonComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      title: 'Collision Repair',
      description: 'Expert collision repair services to restore your vehicle to its pre-accident condition. We work with all insurance companies and handle the claims process for you.',
      features: [
        'Complete structural repairs',
        'Frame straightening',
        'Insurance claims assistance',
        'Post-repair inspection',
        'Lifetime warranty'
      ],
      image: '/assets/images/services/collision-repair.jpg',
      price: 'Starting at $1,500',
      estimatedTime: '3-5 days',
      category: 'Collision'
    },
    {
      id: 2,
      title: 'Paint Services',
      description: 'Premium paint services using the latest color-matching technology and high-quality materials for a perfect finish that lasts.',
      features: [
        'Computerized color matching',
        'Factory-grade paint',
        'Clear coat protection',
        'Paint correction',
        'Spot repairs available'
      ],
      image: '/assets/images/services/paint-services.jpg',
      price: 'Starting at $800',
      estimatedTime: '2-4 days',
      category: 'Paint'
    },
    {
      id: 3,
      title: 'Dent Removal',
      description: "Professional dent removal services using paintless techniques when possible to maintain your vehicle's original finish.",
      features: [
        'Paintless dent repair',
        'Hail damage repair',
        'Door ding removal',
        'Minor collision repair',
        'Same-day service available'
      ],
      image: '/assets/images/services/dent-removal.jpg',
      price: 'Starting at $200',
      estimatedTime: '1-2 days',
      category: 'Repair'
    },
    {
      id: 4,
      title: 'Classic Car Restoration',
      description:         'Complete restoration services for classic and vintage vehicles, preserving their history while bringing them back to their original glory.',
      features: [
        'Complete body restoration',
        'Original parts sourcing',
        'Custom fabrication',
        'Period-correct paint',
        'Documentation and photography'
      ],
      image: '/assets/images/services/classic-restoration.jpg',
      price: 'Starting at $5,000',
      estimatedTime: '2-6 weeks',
      category: 'Restoration'
    },
    {
      id: 5,
      title: 'Custom Body Work',
      description: 'Specialized custom body modifications and enhancements to make your vehicle unique and personalized to your taste.',
      features: [
        'Custom panel fabrication',
        'Body kit installation',
        'Custom paint designs',
        'Performance upgrades',
        'Show car preparation'
      ],
      image: '/assets/images/services/custom-work.jpg',
      price: 'Starting at $2,500',
      estimatedTime: '1-3 weeks',
      category: 'Custom'
    },
    {
      id: 6,
      title: 'Frame & Structural Repair',
      description: 'Expert frame and structural repair services using computerized measuring and alignment systems for precise results.',
      features: [
        'Laser frame measurement',
        'Computerized alignment',
        'Unibody repair',
        'Structural welding',
        'Safety certification'
      ],
      image: '/assets/images/services/frame-repair.jpg',
      price: 'Starting at $1,800',
      estimatedTime: '4-7 days',
      category: 'Structural'
    },
    {
      id: 7,
      title: 'Auto Glass Services',
      description: 'Professional auto glass repair and replacement services for all vehicle makes and models.',
      features: [
        'Windshield replacement',
        'Chip repair',
        'Side window replacement',
        'Calibration services',
        'Mobile service available'
      ],
      image: '/assets/images/services/glass-services.jpg',
      price: 'Starting at $300',
      estimatedTime: '1-2 days',
      category: 'Glass'
    }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialize elementId for each service
    this.services = this.services.map(service => ({
      ...service,
      elementId: service.title.toLowerCase().replace(/\s+/g, '-')
    }));
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
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

    // Refresh on window resize
    let resizeTimeout: any;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 250);
    });
  }

  // Animation helper methods
  getAOSAnimation(index: number): string {
    const animations = ['fade-up', 'fade-right', 'fade-left', 'zoom-in'];
    return animations[index % animations.length];
  }

  getAOSDelay(index: number): number {
    return index * 100; // 100ms delay between each item
  }

  requestService(serviceTitle: string) {
    this.router.navigate(['/contact'], {
      queryParams: {
        service: serviceTitle.toLowerCase().replace(/\s+/g, '-')
      }
    });
  }
}