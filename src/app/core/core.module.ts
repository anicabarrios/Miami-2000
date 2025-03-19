import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EmailService
  ]
})
export class CoreModule { }