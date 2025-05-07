import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InsuranceProvider {
  name: string;

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
    },
    {
      name: 'State Farm',
    },
    {
      name: 'Progressive',
    },
    {
      name: 'Allstate',
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