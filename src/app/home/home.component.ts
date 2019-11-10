import {Component, OnInit, OnChanges, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild} from "@angular/core";
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css", "./home.component.mobile.css"]
})
export class HomeComponent implements OnInit, OnChanges, AfterViewInit {

    Acapella = "1jgddUwNk72BuXGTVT8uXdvH0aw0e9cA0";
    AcapellaTitled = "1Cn6hX8GvrawGXZoqzJZ7CJ1ZGpGHv5zL";

    AcapellaZ1 = "1vCY9JfLrakdgGPvs2LruiU_rqv98SVVv";
    AcapellaZ1Titled = "1a3sMWz1dInEH3H-KgQ3SExusq3TImEsd";

    BigMan = "1goaEkNSESX8fZcJ3KqhSXTYLq1pz5sIb";
    BigManTitled = "1TfdHCcJ1PQ0wSLS9p5dtQqw1LQar_xe6";

    Bwof = "1dg3o0CL_EmoOzPhC8aMbFLwFcSxzEVHk";
    BwofTitled = "1Qg8BN2tuQTKmOa252jML_0SyGvTQ3gmV";

    BlackParty = "1jK5CWD_Dn580fChGVk32LxrQRJu-aA2t";

    Cuco = "1az6tmrBJ49Dd5jUIonS6dCw6lgdgUws_";
    CucoTitled = "1HRR18F13zKxYzYdZxpNFf7o6ELm1kac2";

    EtroAutumnWinter = "1AvylJzutSKThmdvLQgOERvWjEcB5iWIx";
    EtroAutumnWinterTitled = "1ZJQ04zGrfeCE04U4Eq-i70Mnb_Q-kGru";

    EtroNaturaManifesta = "1DB91KQlgKfTmeD70g1HOzQpzmr_Yx1xi";
    EtroNaturaManifestaTitled = "1FUHY5YEc4n5cXiny8gsUoDnwjjvXoCL6";

    Fortnite = "18lKSggAaaMjPt3DY2wKh74wiqdAKAvcy";
    FortniteTitled = "14wQ1n3s11YiDEE2WnBmG8C5T5dJkqECz";

    GucciEasy = "1aju0MR_h8LmahdUa68rq0mhnLmWqQF3H";
    GucciEasyTitled = "1Kn_f5i1faEc7U31MBQlES45HwjEvmcLK";

    Guerx = "16ve9-6ndj8bW2A8Nq5Ifbe_rQSBUchui";
    GuerxTitled = "10_4AvpDSWF_7--utsbqQJqF3B_yAQrcv";

    JoyRide = "1mpT4AUp-26NewMpCB9mNGaEO0yMVrmhI";
    JoyRideTitled = "1Ek6dsbaWuwpqsiwM3XRix4Ny67zOlt0G";

    Kosh = "1fiR87pwNZnMEORvfHEyJXr3eZHdgNKR3";
    KoshTitled = "1TXdATRMalcVHZ-6tNTVdxJHhn6lftG8x";

    MrP = "1wUF1tXfIHqWe-1VL5uyuJTxbyabaereQ";
    MrPTitled = "1KuZJ3m9iqzt4CUvBnkDs0VQm_xL35Qbt";

    Numeni = '1wWumTlCx95Rjy533Xx365jhC9BhWbGMP';
    NumeniTitled = "1fkA9L8XobBBxgDxrJkTkSRzaISlNZ97k";

    PopVerve = "1Qbukyd2_cKILgJSpnhwO0fucDqzxoBcV";
    PopVerveTitled = "11SHmpFID-TUn753FXnnTmSQNtSBwzHHG";

    Rin = "1DpkoHSWwkmador_Sh9ws2V-KgqEKgDrr";
    RinTitled = "1SvtuTGWdz2EwCnknx--bYjLipswYZmnR";

  BannerLink =
    "https://player.vimeo.com/video/363450178?title=0&byline=0&portrait=0&loop=1&player_id=iframe59217?autoplay=1&autopause=0&muted=1&background=1&playsinline=1";

  GoogleBaseLink = "https://drive.google.com/uc?export=view&id=";

  ProjectIDs = [
    this.Acapella,
    this.AcapellaZ1,
    this.BigMan,
    this.Bwof,
    this.Rin,
    this.Cuco,
    this.EtroAutumnWinter,
    this.EtroNaturaManifesta,
    this.Fortnite,
    this.GucciEasy,
    this.Guerx,
    this.JoyRide,
    this.Kosh,
    this.MrP,
    this.Numeni,
    this.PopVerve,
  ];

  TitledProjectIDs = [
    this.AcapellaTitled,
    this.AcapellaZ1Titled,
    this.BigManTitled,
    this.BwofTitled,
    this.RinTitled,
    this.CucoTitled,
    this.EtroAutumnWinterTitled,
    this.EtroNaturaManifestaTitled,
    this.FortniteTitled,
    this.GucciEasyTitled,
    this.GuerxTitled,
    this.JoyRideTitled,
    this.KoshTitled,
    this.MrPTitled,
    this.NumeniTitled,
    this.PopVerveTitled,
  ];

  //ELEMENT HANDLES
  @ViewChild('Contact_Row', {static: true}) Contact_Row;

    //CONTROL VARIABLES
  MouseOverActiveIndex = -1;
  DistanceFromTop = 0;
  Parallaxer = '-400px';
  Parallaxer2 = '-650px';
  DuneParallaxer = '-300px';
  parallaxRatio = .3;
  SpaceshipParallaxRatio = 1.1;
  BannerVideoScaleValue = 1;
  BannerVideoTopValue = '0px';
  BannerRotateValue = 0;
  PlanetTopScale = 1;
  ContactSectionTop = 0;
  SpaceshipY = '0px';
  SpaceshipX = '0px';
  VideoStyles = {
    'top': '0px',
    'position': 'fixed'
  };

  constructor(private scrollDispatcher: ScrollDispatcher, private cdr: ChangeDetectorRef) {    
    this.scrollDispatcher.scrolled().subscribe((x: any) => {
      this.DistanceFromTop = x.elementRef.nativeElement.scrollTop;
      this.topBannerVideo(this.DistanceFromTop);
      this.scaleBannerVideo(this.DistanceFromTop);
      this.scalePlanetTop(this.DistanceFromTop);
      this.parallaxDunes(this.DistanceFromTop);
      this.getContactSectionScrollPosition(this.DistanceFromTop);
      this.landSpaceShip(this.ContactSectionTop);
      this.rotateBannerVideo(this.DistanceFromTop);
      this.Parallaxer = (-400 + (this.DistanceFromTop * this.parallaxRatio)) + 'px';
      this.Parallaxer2 = (-600 + (this.DistanceFromTop * this.parallaxRatio)) + 'px';
      cdr.detectChanges();
    });
  }

  ngOnInit() {
      if (/Mobi|Android/i.test(navigator.userAgent)) {
          alert("Mobile!");
      }
  }

  ngOnChanges()  {
  }

  ngAfterViewInit() {
  }

    BannerVideoScrolled(event: any)   {
    }
  getContactSectionScrollPosition(DistanceFromTop: number)  {
      const height = window.innerHeight || document.documentElement.clientHeight||
          document.body.clientHeight;
      if (this.DistanceFromTop > this.Contact_Row.nativeElement.offsetTop - height/2)  {
      let ContactFormFromTop = this.Contact_Row.nativeElement.offsetTop;
      this.ContactSectionTop = DistanceFromTop - ContactFormFromTop + height/2;
    }
  }

  landSpaceShip(ContactSectionTop: number) {
      this.SpaceshipY = (ContactSectionTop * this.SpaceshipParallaxRatio) + 'px';
      this.SpaceshipX = (ContactSectionTop) + 'px';
  }

  scaleBannerVideo(DistanceFromTop: number)  {
    let ZoomValue = 1 - (DistanceFromTop * (9/6000));
    if (ZoomValue > 1 ) ZoomValue = 1;
      if (ZoomValue <= 0 ) ZoomValue = 0;
      this.BannerVideoScaleValue = ZoomValue;
    return null;
  }
  rotateBannerVideo(DistanceFromTop: number)    {
        this.BannerRotateValue = DistanceFromTop/600;
  }

  topBannerVideo (DistanceFromTop: number)  {
    //0 - 200px to 0 500
    let Top = DistanceFromTop * 1.5;
    if (Top >= 300) {
      Top = 300;
    }
    this.BannerVideoTopValue = Top + 'px';
  }

  scalePlanetTop(DistanceFromTop: number) {
    let ZoomValue = 1 + (DistanceFromTop * (9/4000));
    this.PlanetTopScale = ZoomValue;
    return null;
  }

  parallaxDunes(DistanceFromTop: number) {
    if (DistanceFromTop > 3900 && DistanceFromTop < 5500) {
        this.DuneParallaxer = (-300 + (this.DistanceFromTop * this.parallaxRatio)) + 'px';

    }
  }
}
