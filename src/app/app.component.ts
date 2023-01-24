import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

// install Swiper modules
  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {delay: 2000, disableOnInteraction: true},
    breakpoints:{
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 50
          }
    }
  };
  title = 'app12';
}
