import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

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

  onImageClick(image: GalleryImage) {
    this.imageClick.emit(image);
  }

  onViewAll() {
    this.viewAllClick.emit();
  }
}