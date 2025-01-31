import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryGridComponent } from '../../shared/components/gallery-grid/gallery-grid.component';
import { HeaderComponent } from '../../features/components/header/header.component';
import { FooterComponent } from '../../features/components/footer/footer.component';
import { ImageModalComponent } from '../../features/components/image-modal/image-modal.component';

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
export class GalleryComponent {
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

  galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: 'images/image.jpg',
      title: 'Front-End Collision Repair',
      category: 'Collision Repair',
    },
    {
      id: 2,
      url: 'images/image1.jpg',
      title: 'Custom Pearl Paint Job',
      category: 'Paint Work',
    },
    {
      id: 3,
      url: '/assets/images/gallery/restoration-1.jpg',
      title: 'Classic Car Restoration',
      category: 'Restoration',
    },
    {
      id: 4,
      url: '/assets/images/gallery/custom-1.jpg',
      title: 'Custom Body Kit Installation',
      category: 'Custom Projects',
    },
    {
      id: 5,
      url: '/assets/images/gallery/before-after-1.jpg',
      title: 'Complete Vehicle Transformation',
      category: 'Before & After',
    },
    {
      id: 6,
      url: '/assets/images/gallery/collision-repair-2.jpg',
      title: 'Side Impact Repair',
      category: 'Collision Repair',
    },
    {
      id: 7,
      url: '/assets/images/gallery/paint-2.jpg',
      title: 'Metallic Finish',
      category: 'Paint Work',
    },
    {
      id: 8,
      url: '/assets/images/gallery/restoration-2.jpg',
      title: 'Vintage Restoration Project',
      category: 'Restoration',
    },
    {
      id: 9,
      url: '/assets/images/gallery/custom-2.jpg',
      title: 'Custom Hood Design',
      category: 'Custom Projects',
    },
    {
      id: 10,
      url: '/assets/images/gallery/before-after-2.jpg',
      title: 'Accident Recovery',
      category: 'Before & After',
    },
    {
      id: 11,
      url: '/assets/images/gallery/paint-3.jpg',
      title: 'Candy Paint Application',
      category: 'Paint Work',
    },
    {
      id: 12,
      url: '/assets/images/gallery/restoration-3.jpg',
      title: 'Museum Quality Restoration',
      category: 'Restoration',
    }
  ];

  get filteredGalleryImages() {
    if (this.selectedCategory === 'All') {
      return this.galleryImages;
    }
    return this.galleryImages.filter(image => image.category === this.selectedCategory);
  }

  get hasNextImage() {
    return this.selectedImageIndex < this.filteredGalleryImages.length - 1;
  }

  get hasPreviousImage() {
    return this.selectedImageIndex > 0;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.closeModal();
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
}