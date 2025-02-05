import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../features/components/header/header.component';
import { FooterComponent } from '../../features/components/footer/footer.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router } from '@angular/router';
import AOS from 'aos';

interface TeamMember {
  name: string;
  role: string;
  secondaryRole?: string;
  image: string;
  description: string;
  isFounder?: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ButtonComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'Maclovio Barrios',
      role: 'Master Painter',
      image: '/assets/images/team/maclovio.jpg',
      description: 'Founder and expert painter with decades of experience in auto body repair and restoration, establishing Miami 2000 with a vision for excellence.'
    },
    {
      name: 'Elida Barrios',
      role: 'Insurance Specialist',
      image: '/assets/images/team/elida.jpg',
      description: 'Co-founder of Miami 2000, specializing in insurance claims and customer relations, ensuring seamless repair processes for our clients.'
    },
    {
      name: 'Christian Barrios',
      role: 'Master Painter',
      image: '/assets/images/team/christian.jpg',
      description: 'Skilled painter continuing the family legacy of excellence in auto body repair and restoration.'
    }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

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


  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}