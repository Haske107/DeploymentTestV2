import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', './footer.component.mobile.css']
})
export class FooterComponent implements OnInit {

  @Input() isMobile;



  constructor() { }

  ngOnInit() {
  }

}
