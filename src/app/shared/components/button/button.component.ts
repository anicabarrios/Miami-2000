import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button 
      [class]="variant"
      [disabled]="disabled"
      (click)="onClick.emit()"
      class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto w-full">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .primary {
      @apply bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2;
    }
    
    .secondary {
      @apply bg-transparent border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<void>();
}