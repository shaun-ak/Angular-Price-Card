import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {
  @Input() myData = {
    category : "",
    price: "",
    user: {
      data: "",
      available: true
    },
    storage: {
      data: "",
      available: true
    },
    projects1: {
      data: "",
      available: true
    },
    access: {
      data: "",
      available: true
    },
    projects2: {
      data: "",
      available: false
    },
    phSupport: {
      data: "",
      available: false
    },
    subDomain: {
      data: "",
      available: false
    },
    report: {
      data: "",
      available: false}
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
