import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import Swal from 'sweetalert2'
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {delay: 2000, disableOnInteraction: true},
    breakpoints:{
          640: {
            slidesPerView: 2,
            spaceBetween: 50
          }
    }
  };
  title = 'app12';

  submitButton(){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    ),
    ($('#loginPage') as any).modal('hide');
  }
}
