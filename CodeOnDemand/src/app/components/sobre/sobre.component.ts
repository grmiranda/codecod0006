import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'; // controlador do carousel

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(configCarrousel: NgbCarouselConfig) {
    // customize carousels
    configCarrousel.interval = 2000;
    configCarrousel.wrap = true;
    configCarrousel.keyboard = false;
  }

  ngOnInit() {
  }

}
