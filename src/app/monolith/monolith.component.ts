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
  Player1;

  options = {
    id: 322980163,
    muted: true,
    background: true,
    loop: true,
  };

  ngOnInit() {
  }

  ngAfterViewInit() {
    const playerContainer = document.getElementById('iframe59218');
    this.Player1 = new Player(playerContainer, this.options);

    //window.setTimeout(this.playIfPaused(), 3000);

  }

  playIfPaused()  {
    this.Player1.getPaused().then((Paused) => {
      if (Paused)  {
        this.Player1.play().then(() => {
          // the video was played
          console.log("Force played");
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
      // paused = whether or not the player is paused
    }).catch((error) => {
      // an error occurred
    });
  }

}
