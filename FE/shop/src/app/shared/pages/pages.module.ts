import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../layout/header/header.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [HomeComponent, RouterModule, BrowserModule],
    exports: [HomeComponent],
})
export class PagesModule {}
