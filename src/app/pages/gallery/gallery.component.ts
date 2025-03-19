import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GalleryGridComponent } from '../../shared/components/gallery-grid/gallery-grid.component';
import { HeaderComponent } from '../../features/components/header/header.component';
import { FooterComponent } from '../../features/components/footer/footer.component';
import { ImageModalComponent } from '../../features/components/image-modal/image-modal.component';
import AOS from 'aos';

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule, 
    GalleryGridComponent, 
    HeaderComponent, 
    FooterComponent,
    ImageModalComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  selectedCategory: string = 'All';
  isModalOpen = false;
  selectedImage: GalleryImage | null = null;
  selectedImageIndex = -1;
  
  categories: string[] = [
    'All',
    'Collision Repair',
    'Paint Work',
    'Restoration',
    'Custom Projects',
    'Before & After'
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
    const animations = ['fade-up', 'fade-down', 'fade-right', 'fade-left'];
    return animations[index % animations.length];
  }

  getAOSDelay(index: number): number {
    return index * 100; // 100ms delay between each item
  }

  get filteredGalleryImages() {
    if (this.selectedCategory === 'All') {
      return this.galleryImages;
    }
    return this.galleryImages.filter(image => image.category === this.selectedCategory);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.closeModal();
    
    // Refresh AOS animations after category change
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }

  openModal(image: GalleryImage) {
    this.selectedImage = image;
    this.selectedImageIndex = this.filteredGalleryImages.findIndex(img => img.id === image.id);
    this.isModalOpen = true;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = null;
    this.selectedImageIndex = -1;
    document.body.classList.remove('modal-open');
  }

  navigateImage(direction: 'next' | 'prev') {
    const newIndex = direction === 'next' 
      ? this.selectedImageIndex + 1 
      : this.selectedImageIndex - 1;

    if (newIndex >= 0 && newIndex < this.filteredGalleryImages.length) {
      this.selectedImageIndex = newIndex;
      this.selectedImage = this.filteredGalleryImages[newIndex];
    }
  }

  get hasNextImage() {
    return this.selectedImageIndex < this.filteredGalleryImages.length - 1;
  }

  get hasPreviousImage() {
    return this.selectedImageIndex > 0;
  }
}