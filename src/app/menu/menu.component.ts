import { Component, OnInit, AfterViewInit,AfterViewChecked  } from '@angular/core';
import { SlideInOutAnimation } from './animation';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [SlideInOutAnimation,
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed',   style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})
export class MenuComponent implements OnInit,AfterViewChecked {
  animationState = 'out';
  show: boolean = false;
  
  constructor() { }
  ngAfterViewChecked() {
   this.animationState='in' ; 
}

  ngOnInit() {
    
  }
  
  toggleCollapse() {
    this.show = !this.show;
    console.log(this.show);
  }

  closeMenu(){
    if(this.show){
      this.show = !this.show;
    }
    window.scroll(0, 0);
  }
}
