import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RecetasComponent } from './home/recetas/recetas.component';
import { DropdownDirective } from './core/dropdown.directive';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ServicioDataStorage } from './home/recetas/servicio-data-storage.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';

@NgModule({
  declarations: [AppComponent, DropdownDirective, NavbarComponent, LoginComponent, RegistroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServicioDataStorage],
  bootstrap: [AppComponent],
})
export class AppModule {}
