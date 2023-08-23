import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    TestDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
