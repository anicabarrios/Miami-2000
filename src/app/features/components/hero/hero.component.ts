import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  
})
export class HeroComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    // Initialize any necessary functionality
  }

  ngAfterViewInit() {
    // Handle any post-view initialization
  }

  navigateToEstimate() {
    this.router.navigate(['/contact']);
  }

  navigateToServices() {
    this.router.navigate(['/services']);
  }
}