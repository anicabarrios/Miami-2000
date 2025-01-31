import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter images by category', () => {
    component.filterByCategory('Paint Work');
    expect(component.selectedCategory).toBe('Paint Work');
    expect(component.filteredGalleryImages.every(img => img.category === 'Paint Work')).toBe(true);
  });

  it('should show all images when "All" category is selected', () => {
    component.filterByCategory('All');
    expect(component.filteredGalleryImages.length).toBe(component.galleryImages.length);
  });

  it('should handle modal operations', () => {
    const testImage = component.galleryImages[0];
    
    component.openModal(testImage);
    expect(component.isModalOpen).toBe(true);
    expect(component.selectedImage).toBe(testImage);
    
    component.closeModal();
    expect(component.isModalOpen).toBe(false);
    expect(component.selectedImage).toBeNull();
  });

  it('should navigate between images', () => {
    component.filterByCategory('All');
    component.openModal(component.galleryImages[1]);
    
    component.navigateImage('next');
    expect(component.selectedImageIndex).toBe(2);
    
    component.navigateImage('prev');
    expect(component.selectedImageIndex).toBe(1);
  });
});