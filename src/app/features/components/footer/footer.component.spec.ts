import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have current year', () => {
    const currentYear = new Date().getFullYear();
    expect(component.currentYear).toBe(currentYear);
  });

  it('should have business hours', () => {
    expect(component.businessHours.length).toBe(3);
    expect(component.businessHours[0].day).toBe('Monday - Friday');
    expect(component.businessHours[1].day).toBe('Saturday');
    expect(component.businessHours[2].day).toBe('Sunday');
  });

  it('should have services list', () => {
    expect(component.services.length).toBe(7);
    expect(component.services).toContain('Collision Repair');
    expect(component.services).toContain('Paint Services');
  });

  it('should render copyright text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const currentYear = new Date().getFullYear();
    expect(compiled.querySelector('.text-primary-300')?.textContent)
      .toContain(`© ${currentYear} Miami 2000 Body Shop`);
  });
});