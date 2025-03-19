# Miami 2000 Body Shop

![Miami 2000 Body Shop](https:/images/website.png)

A modern, responsive Angular 19 website for Miami 2000 Body Shop, featuring a sleek design with smooth animations and a comprehensive presentation of auto body repair services.

## 🚗 Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, professional interface with smooth transitions
- **Animation Effects**: Subtle animations enhance user experience using AOS (Animate On Scroll)
- **Interactive Components**: Service cards, image galleries, contact forms
- **Optimized Performance**: Server-side rendering capabilities for improved SEO and load times
- **Form Validation**: Client-side validation for contact forms
- **Email Integration**: Contact form with EmailJS integration
- **Image Modal**: Interactive image gallery with modal viewer

## 🛠️ Technologies Used

- **Angular 19**: Latest version of the Angular framework
- **TypeScript**: Strongly typed programming language
- **TailwindCSS**: Utility-first CSS framework
- **AOS Library**: Animate On Scroll library for scroll animations
- **Angular SSR**: Server-side rendering for improved performance
- **Angular Standalone Components**: Modern component architecture
- **Responsive Design**: Mobile-first approach
- **EmailJS**: Client-side email sending

## 📂 Project Structure

```
src/
├── app/
│   ├── core/           # Core functionality (services, guards)
│   ├── features/       # Feature components (header, footer, etc.)
│   ├── pages/          # Page components
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── gallery/
│   │   └── contact/
│   ├── shared/         # Shared components and utilities
│   └── app.component.* # Root component files
├── assets/             # Static assets (images, icons)
└── styles.css          # Global styles
```

## 🚀 Installation and Setup

### Prerequisites

- Node.js (v18 or later)
- npm (v8 or later)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/anicabarrios/miami-2000.git
   cd miami-2000
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```


## 🌐 Deployment

### Production Build

Create a production build:
```bash
npm run build --configuration=production
```

### Server-Side Rendering (SSR)

Create an SSR build and start the server:
```bash
npm run build:ssr
npm run serve:ssr
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktops
- Large displays



## 📄 License

MIT License - See LICENSE file for details

Made with ❤️ for Miami 2000 Auto Body Shop