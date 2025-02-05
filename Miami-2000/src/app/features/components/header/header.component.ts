import { Component, HostListener, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToQuote() {
    this.router.navigate(['/contact']);
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }
  
  
  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth >= 768) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:keydown.escape', [])
  onEscapePress() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}