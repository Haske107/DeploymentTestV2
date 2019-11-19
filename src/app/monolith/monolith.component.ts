import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-monolith',
  templateUrl: './monolith.component.html',
  styleUrls: ['./monolith.component.css']
})
export class MonolithComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() BannerVideoScaleValue;
  @Input() BannerRotateValue;



  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
