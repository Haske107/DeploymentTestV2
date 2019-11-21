import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-monolith',
  templateUrl: './monolith.component.html',
  styleUrls: ['./monolith.component.css']
})
export class MonolithComponent implements OnInit, AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) { }
  isMobile = false;
  isPaused = true;
  @Input() BannerVideoScaleValue;
  @Input() BannerRotateValue;
  @Input() isPortrait;
  Player1;

  options = {
    id: 322980163,
    muted: true,
    background: true,
    loop: true,
  };

  ngOnInit() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      this.isMobile = true;
    }

  }

  ngAfterViewInit() {
    const playerContainer = document.getElementById('iframe59218');
    this.Player1 = new Player(playerContainer, this.options);

    this.Player1.getPaused().then((paused) => {
      if (paused) {
        this.isPaused = true;

      } else  {
        this.isPaused = false;
      }
      this.cdr.detectChanges();

    }).catch((error) => {
      // an error occurred
    });

  }

  playVideo() {
    this.isPaused = false;

    this.Player1.play().then(() => {
      // the video was played
    }).catch((error) => {
      switch (error.name) {
        case 'PasswordError':
          // the video is password-protected and the viewer needs to enter the
          // password first
          break;
        case 'PrivacyError':
          // the video is private
          break;
        default:
          // some other error occurred
          break;
      }
    });
  }




}
