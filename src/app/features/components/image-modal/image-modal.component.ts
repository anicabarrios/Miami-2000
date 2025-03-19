import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ButtonComponent } from '../../../shared/components/button/button.component';

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  description?: string;
}

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.98) translateY(20px)' }),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 0, transform: 'scale(0.98) translateY(20px)' }))
      ])
    ])
  ]
})
export class ImageModalComponent {
  @Input() isOpen = false;
  @Input() image: GalleryImage | null = null;
  @Input() hasNext = false;
  @Input() hasPrevious = false;
  @Input() currentIndex = 0;
  @Input() totalImages = 0;

  @Output() closeModal = new EventEmitter<void>();
  @Output() navigateImage = new EventEmitter<'next' | 'prev'>();
  @Output() requestServiceClick = new EventEmitter<void>();

  loading = true;

  constructor(private router: Router) {}

  close() {
    this.closeModal.emit();
  }

  navigate(direction: 'next' | 'prev') {
    this.loading = true;
    this.navigateImage.emit(direction);
  }

  requestService() {
    this.close();
    this.router.navigate(['/contact'], {
      queryParams: {
        service: this.image?.category
      }
    });
  }

  onImageLoad() {
    this.loading = false;
  }

  @HostListener('document:keydown.escape')
  onEscapePressed() {
    this.close();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.isOpen) {
      if (event.key === 'ArrowLeft' && this.hasPrevious) {
        event.preventDefault();
        this.navigate('prev');
      }
      if (event.key === 'ArrowRight' && this.hasNext) {
        event.preventDefault();
        this.navigate('next');
      }
    }
  }
}