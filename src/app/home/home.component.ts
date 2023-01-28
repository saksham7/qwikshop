import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = "";
  phone: string = "";
  constructor(private httpClient: HttpClient) { }

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
  title = 'QwikShop';

  submitButton(){
    if(!this.name || !this.phone) {
      return;
    }
    var obj = {
      Name: this.name,
      Mobile: this.phone
    };
    this.httpClient.post('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjMwNTZiMDYzNDA0MzU1MjY0NTUzNiI_3D_pc', obj).subscribe((res:any) => {
      if(res && res.status=='success') {
        Swal.fire(
          'Thank You!',
          'Our team will contact you soon!',
          'success'
        );
        ($('#loginPage') as any).modal('hide');
      } else {
        Swal.fire(
          'Something went wrong!',
          'Try Again!',
          'error'
        );
      }
    });
    
  }
}
