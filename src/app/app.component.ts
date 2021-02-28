import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'OutSpoken';
  loading = true;
  scrollOut: any;
  menuHidden = true;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.scrollOut = ScrollOut({
      threshold: .2,
      once: true,
      scope: this.el.nativeElement
    });

    setTimeout(() => {
      this.loading = false;
      document.documentElement.classList.remove('preload');
    }, 1000);
  }

  ngOnDestroy(): void {
    this.scrollOut.teardown();
  }
}
