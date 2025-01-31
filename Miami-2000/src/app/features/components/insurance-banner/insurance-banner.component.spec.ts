import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceBannerComponent } from './insurance-banner.component';

describe('InsuranceBannerComponent', () => {
  let component: InsuranceBannerComponent;
  let fixture: ComponentFixture<InsuranceBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
