import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit {

  @ViewChild('homeHeadline', { static: true }) homeHeadline!: ElementRef<HTMLElement>;
  @ViewChild('homeSubheadline', { static: true }) homeSubheadline!: ElementRef<HTMLElement>;
  @ViewChild('homeImg', { static: true }) homeImg!: ElementRef<HTMLElement>;
  @ViewChild('heroContainer', { static: true }) heroContainer!: ElementRef<HTMLElement>;
  @ViewChild('ctas', { static: true }) ctas!: ElementRef<HTMLElement>;

  constructor() { }

  ngAfterViewInit() {
    gsap.set([this.homeHeadline.nativeElement, this.homeSubheadline.nativeElement, this.ctas.nativeElement], {
      y: 50,
      opacity: 0
    })
    gsap.set(this.homeImg.nativeElement, {
      y: 100,
      opacity: 0
    })

    gsap.to(this.heroContainer.nativeElement, .6, {
      backgroundColor: '#F4F5FF',
      delay: .6,
    })

    gsap.to(this.homeHeadline.nativeElement, .6, {
      y: 0,
      opacity: 1,
      delay: .6,
      ease: 'back.out'
    })

    gsap.to(this.homeSubheadline.nativeElement, .5, {
      y: 0,
      opacity: 1,
      delay: .8
    })

    gsap.to(this.ctas.nativeElement, .5, {
      y: 0,
      opacity: 1,
      delay: 1
    })

    gsap.to(this.homeImg.nativeElement, 1, {
      y: 0,
      opacity: 1,
      delay: 1,
      ease: 'back.out'
    })
  }

}
