import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Router, NavigationExtras } from '@angular/router';
import { ViewportScroller } from '@angular/common';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery-grid',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.css']
})
export class GalleryGridComponent {
  @Input() images: GalleryImage[] = [];
  @Input() title = 'Recent Projects';
  @Input() subtitle = 'Our Work';
  @Input() description = 'View our latest auto body repair and restoration projects';
  @Input() showHeader = true;
  @Input() showViewAllButton = true;
  @Input() viewAllButtonText = 'View Full Gallery';
  
  @Output() imageClick = new EventEmitter<GalleryImage>();
  @Output() viewAllClick = new EventEmitter<void>();

  constructor(
    private router: Router, 
    private viewportScroller: ViewportScroller
  ) {}

  goToGallery(): void {
    // Navigate to gallery and scroll to top
    this.router.navigate(['/gallery']).then(() => {
      // Use setTimeout to ensure navigation is complete
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        // Also emit the viewAllClick event
        this.viewAllClick.emit();
      }, 100);
    });
  }
  
  getAOSProps(index: number) {
    const animations = ['fade-up', 'fade-right', 'fade-left'];
    const animation = animations[index % animations.length];

    const delay = (index % 3) * 100; 
    const duration = 800 + (index % 2) * 100;

    return {
      'data-aos': animation,
      'data-aos-delay': delay,
      'data-aos-duration': duration,
      'data-aos-easing': 'ease-out-cubic',
      'data-aos-once': 'false'
    };
  }

  onImageClick(image: GalleryImage) {
    this.imageClick.emit(image);
  }

  onViewAll() {
    this.goToGallery();
  }
}