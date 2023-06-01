import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';

const lang = 'en-US';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    NgxMatTimepickerModule.setLocale(lang),
  ],
  providers: [{ provide: LOCALE_ID, useValue: lang }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
