import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showFrist(){
    $("#membro1").removeClass("hidden-sm-up").addClass("animated bounceInRight");
    $("#membro2").removeClass("hidden-sm-up").addClass("animated bounceInUp");
    $("#membro3").removeClass("hidden-sm-up").addClass("animated bounceInLeft");
  }
  showSecond(){
    $("#membro4").removeClass("hidden-sm-up").addClass("animated bounceInRight");
    $("#membro5").removeClass("hidden-sm-up").addClass("animated bounceInUp");
    $("#membro6").removeClass("hidden-sm-up").addClass("animated bounceInLeft");
  }
}
