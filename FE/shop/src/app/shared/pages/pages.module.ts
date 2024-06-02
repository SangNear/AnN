import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../layout/header/header.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [],
    imports: [RouterModule, BrowserModule],
    exports: [],
})
export class PagesModule {}
