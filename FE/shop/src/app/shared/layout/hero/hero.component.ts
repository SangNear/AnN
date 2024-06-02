import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent } from '../../components/swiper/swiper.component';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SwiperComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    register();
  }
}
