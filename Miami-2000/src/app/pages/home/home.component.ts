import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../features/components/header/header.component';
import { HeroComponent } from '../../features/components/hero/hero.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, ServiceCardComponent, ButtonComponent],
  template: `
    <div class="min-h-screen">
      <app-header />
      <app-hero />
      
      <!-- Services Section -->
      <section class="py-16 bg-accent-50">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-primary-800 mb-4">Our Services</h2>
            <p class="text-lg text-primary-600 max-w-2xl mx-auto">
              Professional auto body repair services to restore your vehicle to its former glory
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (service of services; track service.id) {
              <app-service-card
                [imageUrl]="service.imageUrl"
                [title]="service.title"
                [description]="service.description"
              />
            }
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="relative py-32 overflow-hidden bg-gradient-to-b from-primary-900 to-primary-800">
        <!-- Decorative Elements -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div class="container-custom relative z-10">
          <!-- Section Header -->
          <div class="text-center mb-20">
            <div class="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 backdrop-blur-sm mb-4">
              <span class="w-2 h-2 rounded-full bg-secondary-500"></span>
              <span class="text-secondary-400 font-medium text-sm">Why Trust Us</span>
              <span class="w-2 h-2 rounded-full bg-secondary-500"></span>
            </div>
            <h2 class="text-5xl md:text-6xl font-bold text-white mb-6">Excellence in Every Detail</h2>
            <p class="text-xl text-primary-200 max-w-2xl mx-auto">
              Setting the standard in auto body repair with cutting-edge technology and unmatched expertise
            </p>
          </div>

          <!-- Features Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            @for (feature of features; track feature.id) {
              <div class="group relative">
                <div class="absolute inset-0 bg-gradient-to-r from-secondary-500/5 to-transparent rounded-lg blur-md group-hover:blur-md transition-all duration-500 opacity-0 group-hover:opacity-40"></div>
                <div class="relative h-full p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary-500/20 transition-all duration-500">
                  <div class="flex flex-col h-full">
                    <div class="mb-6">
                      <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-400 p-0.5">
                        <div class="w-full h-full rounded-xl bg-primary-900/80 flex items-center justify-center transform group-hover:bg-primary-900/50 transition-all duration-500">
                          <svg class="w-6 h-6 text-secondary-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="feature.icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4 group-hover:text-secondary-300 transition-colors duration-500">{{ feature.title }}</h3>
                    <p class="text-primary-200">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Bottom CTA -->
          <div class="mt-20 text-center">
            <div class="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <span class="text-primary-200">Ready to experience the difference?</span>
              <app-button>
                Schedule Consultation
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </app-button>
            </div>
          </div>
        </div>
      </section>

     
  `
})
export class HomeComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Collision Repair',
      description: 'Expert repair services for vehicles involved in accidents, restoring them to pre-accident condition.',
      imageUrl: '/assets/services/collision-repair.jpg'
    },
    {
      id: 2,
      title: 'Paint Services',
      description: 'Professional auto painting services including custom colors and perfect color matching.',
      imageUrl: '/assets/services/paint-services.jpg'
    },
    {
      id: 3,
      title: 'Dent Removal',
      description: 'Paintless dent repair and traditional dent removal services for all vehicle types.',
      imageUrl: '/assets/services/dent-removal.jpg'
    },
    {
      id: 4,
      title: 'Frame Repair',
      description: 'Precise frame straightening and structural repair services using modern equipment.',
      imageUrl: '/assets/services/frame-repair.jpg'
    },
    {
      id: 5,
      title: 'Glass Replacement',
      description: 'Windshield and auto glass replacement services with quality materials.',
      imageUrl: '/assets/services/glass-replacement.jpg'
    },
    {
      id: 6,
      title: 'Restoration',
      description: 'Classic car restoration and custom vehicle modification services.',
      imageUrl: '/assets/services/restoration.jpg'
    }
  ];

  features = [
    {
      id: 1,
      title: 'Rapid Response',
      description: 'Swift, efficient service delivery without compromising our commitment to excellence and precision.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      id: 2,
      title: 'Master Technicians',
      description: 'Elite team of certified experts with decades of combined experience in advanced repair techniques.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 3,
      title: 'Transparent Pricing',
      description: 'Clear, upfront estimates with no hidden costs. Premium service at competitive market rates.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 4,
      title: 'Guaranteed Quality',
      description: 'Industry-leading warranty on all repairs, backed by our commitment to excellence.',
      icon: 'M5 13l4 4L19 7'
    }
  ];
}