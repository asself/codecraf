import {
  Component,
  ContentChildren,
  QueryList,
  Input,
  AfterContentInit
} from '@angular/core';
import { CarouselItemComponent } from '../carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent) carouselItemList: QueryList<CarouselItemComponent>;

  @Input() delay = 500;
  constructor() {

  }

  ngAfterContentInit() {
    const carouseItems = this.carouselItemList.toArray();
    console.log('carouseItems is===', carouseItems);
    let count = 0;
    const max =  carouseItems.length;
    setInterval(() => {
      const i = count % max;
      carouseItems.forEach((item) => item.isActive = false);
      carouseItems[i].isActive = true;
      count += 1;

    }, this.delay);
  }

}
