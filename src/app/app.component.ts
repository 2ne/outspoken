import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'OutSpoken';
  loading = false;
  so: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.loading = false;
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
