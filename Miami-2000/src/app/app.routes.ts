import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Miami 2000  Body Shop'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us - Miami 2000 Body Shop'
  },
  {
    path: 'services',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
        title: 'Our Services - Miami 2000 Body Shop'
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
        title: 'Service Details - Miami 2000 Body Shop'
      }
    ]
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Project Gallery - Miami 2000 Body Shop'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us - Miami 2000 Body Shop'
  },

  {
    path: '**',
    redirectTo: '404'
  }
];