import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageModalComponent } from './image-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from '../../../shared/components/button/button.component';

describe('ImageModalComponent', () => {
  let component: ImageModalComponent;
  let fixture: ComponentFixture<ImageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ImageModalComponent,
        BrowserAnimationsModule,
        ButtonComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event when close button is clicked', () => {
    spyOn(component.closeModal, 'emit');
    component.close();
    expect(component.closeModal.emit).toHaveBeenCalled();
  });

  it('should handle image load event', () => {
    component.loading = true;
    component.onImageLoad();
    expect(component.loading).toBeFalse();
  });

  it('should emit navigation event with correct direction', () => {
    spyOn(component.navigateImage, 'emit');
    component.navigate('next');
    expect(component.navigateImage.emit).toHaveBeenCalledWith('next');
    expect(component.loading).toBeTrue();
  });

  it('should emit request service event', () => {
    spyOn(component.requestServiceClick, 'emit');
    component.requestService();
    expect(component.requestServiceClick.emit).toHaveBeenCalled();
  });
});