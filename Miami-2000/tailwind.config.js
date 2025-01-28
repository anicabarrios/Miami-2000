/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',   // Clean white
          100: '#f1f5f9',  // Bright white
          200: '#e2e8f0',  // Light cool
          300: '#cbd5e1',  // Soft cool
          400: '#94a3b8',  // Medium cool
          500: '#334155',  // Rich slate - primary brand color
          600: '#1e293b',  // Deep slate
          700: '#0f172a',  // Dark slate
          800: '#0f172a',  // Near black slate
          900: '#020617',  // Deepest slate
        },
        secondary: {       // Powerful red-orange
          50: '#fef3f2',   
          100: '#fee4e2',  
          200: '#fecdca',  
          300: '#fda29b',  
          400: '#f87171',  
          500: '#e34c26',  // Main brand color - strong industrial red-orange
          600: '#c2410c',  // Deep red-orange
          700: '#9a3412',  // Rich dark red-orange
          800: '#7c2d12',  // Very dark red-orange
          900: '#5c2111',  // Deepest shade
        },
        accent: {          // Zinc/Steel grays
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#52525b',  // Modern zinc
          600: '#3f3f46',
          700: '#27272a',
          800: '#18181b',
          900: '#09090b',
        },
        metal: {           // Cool gray
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#4b5563',  // Industrial gray
          600: '#374151',
          700: '#1f2937',
          800: '#111827',
          900: '#030712',
        },
        success: {
          500: '#16a34a',  // Fresh green
        },
        warning: {
          500: '#d97706',  // Warm amber
        },
        error: {
          500: '#dc2626',  // Bright red
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Industry', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
      boxShadow: {
        'strong': '0 20px 25px -5px rgba(51, 65, 85, 0.25), 0 8px 10px -6px rgba(227, 76, 38, 0.1)',
        'card': '0 4px 6px -1px rgba(51, 65, 85, 0.1), 0 2px 4px -2px rgba(227, 76, 38, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      }
    },
  },
  plugins: [],
}