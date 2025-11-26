import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements AfterViewInit {

  @ViewChild('servicesLabel', { static: true }) servicesLabel!: ElementRef<HTMLElement>;
  @ViewChild('servicesBtn', { static: true }) servicesBtn!: ElementRef<HTMLElement>;
  @ViewChild('servicesHeadline', { static: true }) servicesHeadline!: ElementRef<HTMLElement>;
  @ViewChild('servicesSubheadline', { static: true }) servicesSubheadline!: ElementRef<HTMLElement>;
  @ViewChild('servicesImgContainer', { static: true }) servicesImgContainer!: ElementRef<HTMLElement>;
  @ViewChild('servicesImg', { static: true }) servicesImg!: ElementRef<HTMLElement>;

  constructor() { }

  ngAfterViewInit() {
    gsap.set(this.servicesLabel.nativeElement, {
      x: '-50%'
    })

    gsap.set(this.servicesBtn.nativeElement, {
      x: '100%'
    })

    gsap.set([this.servicesHeadline.nativeElement, this.servicesSubheadline.nativeElement, this.servicesImg.nativeElement], {
      y: 50,
      opacity: 0
    })

    gsap.to(this.servicesLabel.nativeElement, .8, {
      x: 0,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.servicesLabel.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.servicesBtn.nativeElement, 1, {
      x: 0,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.servicesBtn.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.servicesHeadline.nativeElement, 1, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.servicesHeadline.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.servicesSubheadline.nativeElement, 1, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.servicesSubheadline.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.servicesImgContainer.nativeElement, 1, {
      backgroundColor: '#F4F5FF',
      scrollTrigger: {
        trigger: this.servicesImgContainer.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.servicesImg.nativeElement, 1, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.servicesImg.nativeElement,
        start: 'top 80%',
      }
    });
  }

}
