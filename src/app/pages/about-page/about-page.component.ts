import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements AfterViewInit {

  @ViewChild('aboutHeadline', { static: true }) aboutHeadline!: ElementRef<HTMLElement>;
  @ViewChild('aboutTracking1', { static: true }) aboutTracking1!: ElementRef<HTMLElement>;
  @ViewChild('aboutTracking2', { static: true }) aboutTracking2!: ElementRef<HTMLElement>;
  @ViewChild('aboutTracking3', { static: true }) aboutTracking3!: ElementRef<HTMLElement>;
  @ViewChild('aboutLabel', { static: true }) aboutLabel!: ElementRef<HTMLElement>;
  @ViewChild('aboutImg1', { static: true }) aboutImg1!: ElementRef<HTMLElement>;
  @ViewChild('aboutImg1Container', { static: true }) aboutImg1Container!: ElementRef<HTMLElement>;
  @ViewChild('aboutListAnim', { static: true }) aboutListAnim!: ElementRef<HTMLElement>;
  @ViewChild('aboutImg2', { static: true }) aboutImg2!: ElementRef<HTMLElement>;
  @ViewChild('aboutImg3', { static: true }) aboutImg3!: ElementRef<HTMLElement>;
  @ViewChild('aboutBtn', { static: true }) aboutBtn!: ElementRef<HTMLElement>;
  @ViewChild('aboutHeadline2', { static: true }) aboutHeadline2!: ElementRef<HTMLElement>;
  @ViewChild('aboutSubheadline', { static: true }) aboutSubheadline!: ElementRef<HTMLElement>;

  aboutList: any[] = [
    { id: 1, title: 'Real-Time Tracking', description: 'Monitor inventory levels instantly as products are added, sold, or moved. Stay updated in real time to avoid stockouts and streamline operations' },
    { id: 2, title: 'Insightful Analytics', description: 'Gain clear visibility into sales, stock trends, and performance with powerful analytics. Make data-driven decisions to optimize inventory and boost efficiency' },
    { id: 3, title: 'Custom Data Filters', description: 'Easily sort and view the data that matters most with custom filters. Focus on specific products, locations, or dates to streamline your analysis' }
  ]

  selectedListId: number = 1;

  constructor() { }

  ngAfterViewInit() {
    gsap.set([
      this.aboutHeadline.nativeElement,
      this.aboutTracking1.nativeElement,
      this.aboutTracking2.nativeElement,
      this.aboutTracking3.nativeElement,
      this.aboutListAnim.nativeElement,
      this.aboutImg2.nativeElement,
      this.aboutImg3.nativeElement,
      this.aboutHeadline2.nativeElement,
      this.aboutSubheadline.nativeElement,
    ], {
      y: 50,
      opacity: 0
    })

    gsap.set(this.aboutLabel.nativeElement, {
      x: '-50%'
    })

    gsap.set(this.aboutImg1.nativeElement, {
      opacity: 0,
      scale: 0
    })

    gsap.set(this.aboutBtn.nativeElement, {
      x: '100%',
    })

    gsap.to(this.aboutHeadline.nativeElement, .6, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.aboutHeadline.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutTracking1.nativeElement, .6, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.aboutTracking1.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutTracking2.nativeElement, .6, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      delay: .2,
      scrollTrigger: {
        trigger: this.aboutTracking2.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutTracking3.nativeElement, .6, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      delay: .4,
      scrollTrigger: {
        trigger: this.aboutTracking3.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutLabel.nativeElement, .8, {
      x: 0,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.aboutLabel.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutImg1.nativeElement, .8, {
      opacity: 1,
      scale: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.aboutImg1.nativeElement,
        start: 'top 100%',
      }
    });

    gsap.to(this.aboutImg1Container.nativeElement, .8, {
      backgroundColor: '#F4F5FF',
      scrollTrigger: {
        trigger: this.aboutImg1Container.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutListAnim.nativeElement, .8, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: this.aboutListAnim.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutImg2.nativeElement, 1, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.aboutImg2.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutImg3.nativeElement, 1, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.aboutImg3.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutBtn.nativeElement, 1, {
      x: 0,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.aboutBtn.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutHeadline2.nativeElement, .6, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.aboutHeadline2.nativeElement,
        start: 'top 80%',
      }
    });

    gsap.to(this.aboutSubheadline.nativeElement, .6, {
      y: 0,
      opacity: 1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: this.aboutSubheadline.nativeElement,
        start: 'top 80%',
      }
    });
  }

  updateDisplay(selectedList: any) {
    this.selectedListId = selectedList.id;
  }
}
