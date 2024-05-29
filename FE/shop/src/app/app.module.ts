import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './shared/pages/pages.module';
import { LayoutModule } from './shared/layout/layout.module';
import { HeaderComponent } from './shared/layout/header/header.component';

@NgModule({
    declarations: [],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, PagesModule, LayoutModule],
    providers: [],
    bootstrap: [],
})
export class AppModule {}
