import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-monolith',
  templateUrl: './monolith.component.html',
  styleUrls: ['./monolith.component.css']
})
export class MonolithComponent implements OnInit {

  constructor() { }


  @Input() BannerVideoScaleValue;
  @Input() BannerRotateValue;


  ngOnInit() {
  }

}
