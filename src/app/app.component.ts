import { Component } from '@angular/core';
import {IPainting} from './Painting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string='Paintings of Vincent Van Gogh';
 painting1:IPainting={
   image:'./assets/images/Portrait_with_ear.jpg',
   name:'Self-portrait Vincent van Gogh with bandaged ear',
   author:'Vincent van Gogh',
   year_of_creation:new Date('1889-01'),
   size:'60x49cm',
   location:'The Courtauld Gallery in London'
 }
 painting2:IPainting={
  image:'./assets/images/Potato_eaters.jpg',
  name:'The Potato Eaters',
  author:'Vincent van Gogh',
  year_of_creation:new Date('1885-04'),
  size:'82x1,14cm',
  location:'The Museum of Van Gogh in Amsterdam'
}
painting3:IPainting={
  image:'./assets/images/Harvest.jpg',
  name:'Harvest',
  author:'Vincent van Gogh',
  year_of_creation:new Date('1888-02'),
  size:'73,4x91,8cm',
  location:'The Museum of Van Gogh in Amsterdam'
}
painting4:IPainting={
  image:'./assets/images/Starry_Night.jpg',
  name:'The Starry Night',
  author:'Vincent van Gogh',
  year_of_creation:new Date('1889-06'),
  size:'74x92cm',
  location:'Museum of Modern Art in New-York'
}
painting5:IPainting={
  image:'./assets/images/Irises.jpg',
  name:'Irises',
  author:'Vincent van Gogh',
  year_of_creation:new Date('1889-01'),
  size:'71x93cm',
  location:'Getty Museum in  Los Angeles'
}
 paintings:IPainting[]=[this.painting1,this.painting2,this.painting3,this.painting4,this.painting5]
}
