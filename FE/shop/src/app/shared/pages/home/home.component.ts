import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroComponent } from '../../layout/hero/hero.component';
import { AdvertisingComponent } from '../../layout/advertising/advertising.component';
import { QuickContactsComponent } from '../../layout/quick-contacts/quick-contacts.component';
import { MainComponent } from '../../layout/main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    AdvertisingComponent,
    QuickContactsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
