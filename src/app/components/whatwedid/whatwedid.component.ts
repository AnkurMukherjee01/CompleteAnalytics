import { Component, OnInit,HostListener,ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'whatwedid',
  templateUrl: './whatwedid.component.html',
  styleUrls: ['./whatwedid.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        
       transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)",
      })),
      transition('show => hide', animate('.7s ease-in-out')),
      transition('hide => show', animate('2s ease-in-out'))
    ])
]
})
export class WhatwedidComponent implements OnInit {

  state = 'hide'

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if ((window.innerHeight/2+scrollPosition) >= componentPosition) {
      console.log("in");
      this.state = 'show'
    } 

}
}
