import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InsuranceProvider {
  name: string;
  logoUrl: string;
  altText: string;
}

@Component({
  selector: 'app-insurance-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-banner.component.html',
  styleUrls: ['./insurance-banner.component.css']
})
export class InsuranceBannerComponent {
  insuranceProviders: InsuranceProvider[] = [
    {
      name: 'Geico',
      logoUrl: '/assets/insurance/geico.png',
      altText: 'Geico Insurance'
    },
    {
      name: 'State Farm',
      logoUrl: '/assets/insurance/state-farm.png',
      altText: 'State Farm Insurance'
    },
    {
      name: 'Progressive',
      logoUrl: '/assets/insurance/progressive.png',
      altText: 'Progressive Insurance'
    },
    {
      name: 'Allstate',
      logoUrl: '/assets/insurance/allstate.png',
      altText: 'Allstate Insurance'
    }
  ];

  features = [
    {
      icon: 'M5 13l4 4L19 7',
      text: 'Fast Claims'
    },
    {
      icon: 'M5 13l4 4L19 7',
      text: 'Direct Billing'
    }
  ];
}