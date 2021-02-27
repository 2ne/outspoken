import {AfterContentInit, Component, ElementRef, OnDestroy} from '@angular/core';
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, OnDestroy {
  title = 'OutSpoken';
  so: any;

  constructor(private el: ElementRef) {}

  ngAfterContentInit(): void {
    this.so = ScrollOut({
      threshold: .2,
      once: true,
      scope: this.el.nativeElement
    });
  }

  ngOnDestroy(): void {
    this.so.teardown();
  }
}
