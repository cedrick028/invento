import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {

  @ViewChild('navContainer', { static: true }) navContainer!: ElementRef<HTMLElement>;

  navMenu: any[] = [
    { navLabel: 'Home' },
    { navLabel: 'About' },
    { navLabel: 'Services' },
    { navLabel: 'Partners' },
    { navLabel: 'FAQ' }
  ]

  constructor() { }

  ngAfterViewInit() {
    gsap.set(this.navContainer.nativeElement, {
      y: -100,
      opacity: 0,
    })

    gsap.to(this.navContainer.nativeElement, 1, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      delay: .2,
      scrollTrigger: {
        trigger: this.navContainer.nativeElement,
        start: 'top 80%',
      }
    });
  }

}
